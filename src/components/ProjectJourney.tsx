import { useEffect, useRef, useState } from "react";

const stages = [
  { name: "The model", line: "We resolve the details before the first cut." },
  { name: "The vision", line: "We turn the concept into a material direction." },
  { name: "The making", line: "We fabricate, coordinate and install on site." },
  { name: "The reality", line: "We bring every detail together, ready for life." },
];

export function ProjectJourney() {
  const section = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [stage, setStage] = useState(0);
  const [available, setAvailable] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!section.current) return;
      const rect = section.current.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (64 - rect.top) / Math.max(1, rect.height - innerHeight)));
      progress.current = p;
      if (!reduced) setStage(Math.min(3, Math.floor(p * 4)));
    };
    const request = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); addEventListener("scroll", request, { passive: true }); addEventListener("resize", request);
    return () => { cancelAnimationFrame(frame); removeEventListener("scroll", request); removeEventListener("resize", request); };
  }, [reduced]);
  useEffect(() => {
    if (reduced) return;
    const host = viewport.current;
    if (!host) return;
    let disposed = false;
    let cleanup = () => {};
    const observer = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      try {
        const T = await import("three");
        if (disposed) return;
        const renderer = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
        renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); renderer.setClearColor(0x151b19, 1);
        renderer.toneMapping = T.ACESFilmicToneMapping;
        const scene = new T.Scene();
        const camera = new T.PerspectiveCamera(38, 1, .1, 100);
        const room = new T.Group(); scene.add(room);
        scene.add(new T.HemisphereLight(0xfff5dc, 0x293630, 3));
        const sun = new T.DirectionalLight(0xffd8a0, 4); sun.position.set(2, 6, 4); scene.add(sun);
        const meshes: InstanceType<typeof T.Mesh>[] = [];
        const box = (w: number, h: number, d: number, x: number, y: number, z: number, color: number) => {
          const mesh = new T.Mesh(new T.BoxGeometry(w, h, d), new T.MeshStandardMaterial({ color, roughness: .72, transparent: true }));
          mesh.position.set(x, y, z); room.add(mesh); meshes.push(mesh);
          mesh.add(new T.LineSegments(new T.EdgesGeometry(mesh.geometry), new T.LineBasicMaterial({ color: 0xc1aa7d, transparent: true, opacity: .65 })));
        };
        box(6,.15,4,0,0,0,0xb5ac97); box(6,3,.12,0,1.5,-2,0xe4ddcd); box(.12,3,4,-3,1.5,0,0xbbb4a2);
        for(let i=0;i<21;i++) box(.065,2.8,.12,-2.7+i*.19,1.5,-1.88,0x7c573b);
        box(2.8,.4,.6,-.5,.5,-1.52,0x77583e); box(1.65,.94,.06,-.5,1.55,-1.77,0x242a29);
        box(2.7,.35,1.1,.5,.4,.9,0xd4c8b0); box(2.7,.65,.2,.5,.8,1.38,0xd4c8b0);
        box(.18,.55,1.1,-.9,.66,.9,0xc2b599); box(.18,.55,1.1,1.9,.66,.9,0xc2b599);
        box(1.4,.12,.65,.4,.55,-.25,0x705038); box(.1,.5,.5,-.15,.26,-.25,0x242a29); box(.1,.5,.5,.95,.26,-.25,0x242a29);
        box(3.5,.025,2.1,.3,.1,.4,0x8b8d7f);
        host.appendChild(renderer.domElement);
        let raf = 0;
        const draw = () => {
          if(disposed) return;
          const p = progress.current;
          camera.position.set(7-p*3,5-p,8); camera.lookAt(0,1,0); room.rotation.y=-.12+p*.25;
          const reveal = T.MathUtils.smoothstep(p, .19, .3);
          meshes.forEach(mesh => {
            const mat = mesh.material as InstanceType<typeof T.MeshStandardMaterial>;
            mat.opacity = reveal;
            mat.depthWrite = reveal > .5;
            const edges = mesh.children[0] as InstanceType<typeof T.LineSegments>;
            (edges.material as InstanceType<typeof T.LineBasicMaterial>).opacity = .8 - reveal * .7;
          });
          renderer.render(scene,camera);
        };
        const resize = new ResizeObserver(() => { const {width,height} = host.getBoundingClientRect(); renderer.setSize(width,height); camera.aspect=width/Math.max(height,1); camera.updateProjectionMatrix(); draw(); });
        const request = () => { const rect = host.getBoundingClientRect(); if(rect.bottom < 0 || rect.top > innerHeight) return; cancelAnimationFrame(raf); raf=requestAnimationFrame(draw); };
        const lost = (event: Event) => { event.preventDefault(); setAvailable(false); };
        renderer.domElement.addEventListener("webglcontextlost", lost);
        resize.observe(host); addEventListener("scroll",request,{passive:true}); draw(); setAvailable(true);
        cleanup = () => { cancelAnimationFrame(raf); resize.disconnect(); removeEventListener("scroll",request); renderer.domElement.removeEventListener("webglcontextlost",lost); scene.traverse(obj => { if(obj instanceof T.Mesh || obj instanceof T.LineSegments) { obj.geometry.dispose(); const materials = Array.isArray(obj.material) ? obj.material : [obj.material]; materials.forEach(m=>m.dispose()); } }); renderer.dispose(); renderer.domElement.remove(); };
      } catch { if(!disposed) setAvailable(false); }
    }, { rootMargin: "300px" });
    observer.observe(host);
    return () => { disposed=true; observer.disconnect(); cleanup(); };
  }, [reduced]);
  const select = (index: number) => {
    setStage(index);
    if(!reduced && section.current) {
      const top=section.current.getBoundingClientRect().top+scrollY-64;
      scrollTo({top:top+(section.current.offsetHeight-innerHeight)*(index+.15)/4,behavior:"smooth"});
    }
  };
  return <section id="journey" className={`project-journey ${reduced ? "reduce-journey" : ""}`} ref={section} aria-label="From concept to completion">
    <div className="journey-sticky">
      <div className="journey-heading"><p className="eyebrow">FROM CONCEPT TO COMPLETION</p><h2>Watch the idea <em>become real.</em></h2><a href="#selected-work">Skip to projects ↗</a></div>
      <div className="journey-visual" data-stage={stage}>
        <div className={`three-viewport ${stage > 1 ? "concealed" : ""}`} ref={viewport} aria-hidden="true" />
        {(!available || reduced) && stage < 2 && <div className="model-fallback" aria-hidden="true"><div className="model-room"><b /></div><span>{stage === 0 ? "CONCEPT / SPATIAL STUDY" : "MATERIAL / LIGHT / FORM"}</span></div>}
        <img className={`journey-photo ${stage === 2 ? "visible" : ""}`} src="/projects/wall/IMG_4794.webp" alt="On-site interior work with ladder, materials and wall finishes" loading="lazy" width="1600" height="2134" />
        <img className={`journey-photo ${stage === 3 ? "visible" : ""}`} src="/projects/wall/IMG_4777.webp" alt="Finished timber feature wall with shelving and plants" loading="lazy" width="960" height="1280" />
        <span className="journey-number">0{stage+1}<small> / 04</small></span>
        <p className="journey-caption" aria-live="polite">{stages[stage].line}</p>
      </div>
      <div className="journey-controls">{stages.map((item,i)=><button key={item.name} onClick={()=>select(i)} aria-pressed={stage===i}><span>0{i+1}</span>{item.name}</button>)}</div>
      <p className="journey-note">Illustrative 3D concept · Site and finish photographs from our portfolio.</p>
    </div>
  </section>;
}
