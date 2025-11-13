"use client";

export default function Hero() {

  return (
      <div className=' hero-section'>
        <video className=""
               poster={`/assets/videos/videos.mov`} playsInline autoPlay loop muted>
          <source
              className=""
              src={`/assets/videos/videos.mov`}
              type="video/mov"
          />
          <source className="" src={`/assets/videos/videos.mov`} type="video/ogv"/>
          <source className="" type="video/webm" src={`/assets/videos/videos.mov`}/>
        </video>
      </div>
  );
}
