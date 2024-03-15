export async function GET() {
    const Tags = [
        "All",
        "New York Jets",
        "Mixes",
        "Music",
        "Live",
        "Miranda Sings",
        "Gaming",
        "Podcasts",
        "New York Jets",
        "Mixes",
        "Music",
        "Live",
        "Miranda Sings",
        "Gaming",
        "Podcasts",
      ];

    const object = { tags: Tags }
    return Response.json(object)
}