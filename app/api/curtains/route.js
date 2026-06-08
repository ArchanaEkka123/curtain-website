import dbConnect from "@/lib/mongodb";


export async function GET() {
  await dbConnect();

  const curtains = await Curtain.find();

  return Response.json(curtains);
}

export async function POST(req) {
  await dbConnect();

  const body = await req.json();

  const curtain = await Curtain.create(body);

  return Response.json(curtain);
}