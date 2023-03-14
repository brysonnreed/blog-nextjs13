import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          // Required: Accepts a async function
          // OR a string
          url: `${vercelUrl || "http://localhost:3000"}/api/preview`,
          // Optional: set the default size
          defaultSize: "desktop",
          // Optional: add a reload button, or reload on new document revisions
          reload: {
            button: true,
          },
          // Optional: pass atributes to the underlying 'iframe' element
          attributes: {},
        })
        .title("Preview"),
    ]);
  }
};
