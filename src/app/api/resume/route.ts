import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), "public", "Gaurav_Gupta_Resume.pdf");

    if (!fs.existsSync(filePath)) {
      // Fallback redirect directly to the statically served asset
      return NextResponse.redirect(new URL("/Gaurav_Gupta_Resume.pdf", request.url));
    }

    const fileBuffer = fs.readFileSync(filePath);
    const { searchParams } = new URL(request.url);
    const isDownload = searchParams.get("download") === "1" || searchParams.get("download") === "true";

    const disposition = isDownload
      ? 'attachment; filename="Gaurav_Gupta_Resume.pdf"'
      : 'inline; filename="Gaurav_Gupta_Resume.pdf"';

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": disposition,
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error serving resume:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

