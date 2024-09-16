/* eslint-env node */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const font = fetch(new URL("./Inter-SemiBold.otf", import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function handler(req) {
  const inter = await font;
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title")?.slice(0, 100) || "GOPX WEBUI";
  const description =
    searchParams.get("description")?.slice(0, 200) ||
    "Beautiful UI Components for web at your fingertips!";
  const image = searchParams.get("image") || "https://webui.gopx.dev/og.jpeg";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "40px",
          backgroundImage: "linear-gradient(180deg, #000000 30%, #192B8C)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "25px",
            fontSize: "18px",
            fontWeight: "1000",
            color: "#ffffff",
          }}
        >
          <img
            style={{
              marginRight: "5px",
            }}
            height="30"
            width="30"
            src="https://webui.gopx.dev/webui-dark-rounded.png"
            alt="Gopal Verma"
          />
          GOPX WEBUI
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "30px 0 0px 0",
            color: "#ffffff",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "18px",
            textAlign: "center",
            maxWidth: "800px",
            margin: "20px 0 40px 0",
            color: "#ffffff",
          }}
        >
          {description}
        </p>

        <div
          style={{
            marginBottom: "-300px",
            display: "flex",
            width: "90%",
            height: "600px",
            padding: "10px",
            backgroundColor: "#1F1F1F",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: "15px",
            }}
          >
            <img
              src={image}
              alt="Component preview"
              width="1200"
              height="400px"
              style={{
                borderRadius: "15px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: "-50px",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: inter,
          style: "normal",
        },
      ],
    },
  );
}
