import ContentLoader from "react-content-loader";

export default function Loader({ props }) {
  return (
    <div className="loader">
      <span style={{ height: "80px", width: "100%" }}>
        <ContentLoader
          speed={1}
          width={70}
          height={70}
          style={{ position: "absolute", right: "10px", top: "5px" }}
          viewBox="0 0 70 70"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="19" y="30" rx="0" ry="0" width="0" height="1" />
          <rect x="550" y="320" rx="0" ry="0" width="64" height="10" />
          <circle cx="35" cy="35" r="35" />
        </ContentLoader>
      </span>
      <ContentLoader
        style={{ position: "sticky", left: "7px" }}
        speed={2}
        width={376}
        height={200}
        viewBox="0 0 376 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="19" y="30" rx="0" ry="0" width="0" height="1" />
        <rect x="550" y="320" rx="0" ry="0" width="64" height="10" />
        <rect x="32" y="200" rx="0" ry="0" width="376" height="74" />
        <rect x="0" y="0" rx="20" ry="20" width="376" height="200" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={376}
        height={22}
        viewBox="0 0 376 22"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        style={{ marginTop: "15px", marginLeft: "7px" }}
      >
        <rect x="19" y="30" rx="0" ry="0" width="0" height="1" />
        <rect x="550" y="320" rx="0" ry="0" width="64" height="10" />
        <rect x="0" y="136" rx="0" ry="0" width="181" height="11" />
        <rect x="30" y="223" rx="0" ry="0" width="32" height="32" />
        <rect x="71" y="223" rx="0" ry="0" width="32" height="32" />
        <rect x="0" y="154" rx="0" ry="0" width="81" height="12" />
        <rect x="0" y="170" rx="0" ry="0" width="30" height="23" />
        <rect x="41" y="170" rx="0" ry="0" width="30" height="23" />
        <rect x="0" y="0" rx="0" ry="0" width="376" height="22" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={376}
        height={50}
        viewBox="0 0 376 50"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        style={{ marginLeft: "7px" }}
      >
        <rect x="19" y="30" rx="0" ry="0" width="0" height="1" />
        <rect x="550" y="320" rx="0" ry="0" width="64" height="10" />
        <rect x="4" y="28" rx="0" ry="0" width="45" height="20" />
        <rect x="56" y="28" rx="0" ry="0" width="45" height="20" />
        <rect x="108" y="28" rx="0" ry="0" width="45" height="20" />
        <rect x="160" y="28" rx="0" ry="0" width="45" height="20" />
        <rect x="211" y="27" rx="0" ry="0" width="45" height="20" />
        <rect x="264" y="27" rx="0" ry="0" width="45" height="20" />
        <rect x="316" y="27" rx="0" ry="0" width="45" height="20" />
        <rect x="368" y="27" rx="0" ry="0" width="45" height="20" />
      </ContentLoader>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          padding: "7px",
        }}
      >
        {Array(4)
          .fill()
          .map(() => (
            <ContentLoader
              key={Math.random() * 10}
              style={{ marginLeft: "5px" }}
              speed={1}
              width={181}
              height={200}
              viewBox="0 0 181 200"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              {...props}
            >
              <rect x="19" y="30" rx="0" ry="0" width="0" height="1" />
              <rect x="550" y="320" rx="0" ry="0" width="64" height="10" />
              <rect x="0" y="136" rx="0" ry="0" width="181" height="11" />
              <rect x="30" y="223" rx="0" ry="0" width="32" height="32" />
              <rect x="71" y="223" rx="0" ry="0" width="32" height="32" />
              <rect x="0" y="0" rx="0" ry="0" width="181" height="130" />
              <rect x="0" y="154" rx="0" ry="0" width="81" height="12" />
              <rect x="0" y="170" rx="0" ry="0" width="30" height="23" />
              <rect x="41" y="170" rx="0" ry="0" width="30" height="23" />
            </ContentLoader>
          ))}
      </div>
    </div>
  );
}
