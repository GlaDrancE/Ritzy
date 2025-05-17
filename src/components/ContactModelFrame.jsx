// IframeWrapper.js
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import ContactModel from "./ContactModel";
import Preloader from "./Preloader";

const IframeWrapper = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeDocument = iframeRef.current.contentDocument;
    const iframeWindow = iframeRef.current.contentWindow;

    const renderIframeContent = () => {
      if (iframeDocument) {
        const mountNode = iframeDocument.body;

        ReactDOM.createRoot();
      }
    };

    const sendMessageToParent = (message) => {
      iframeWindow.parent.postMessage(message, "*");
    };

    if (iframeDocument && iframeDocument.readyState === "complete") {
      renderIframeContent();
    } else {
      iframeRef.current.onload = renderIframeContent;
    }

    return () => {
      if (iframeRef.current) {
        ReactDOM.unmountComponentAtNode(iframeRef.current.contentDocument.body);
      }
    };
  }, []);

  return (
    <>
      <iframe ref={iframeRef} title="Contact" />
    </>
  );
};

export default IframeWrapper;
