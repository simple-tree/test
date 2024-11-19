// import { Sticky } from "react-stickup";
// import { StickyProvider } from "react-stickup";
import React from "react";

function ReactSticky() {
    const container = React.createRef();
  return (
    <div>
      {/* <StickyProvider>
        <div ref={container}>
          <Sticky container={container}>
            <h>My Header</h>
          </Sticky>
          <div style={{ height: "5000px" }}>Lots of content</div>
        </div>
        <Sticky>
          <h>My Header</h>
        </Sticky>
      </StickyProvider> */}
      ,
    </div>
  );
}

export default ReactSticky;
