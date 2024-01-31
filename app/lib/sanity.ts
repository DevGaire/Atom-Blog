import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client = createClient({
    apiVersion: "2023-05-03",
    dataset: "production",
    projectId: "d6wre182",
    useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}