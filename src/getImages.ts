import probe, { ProbeResult } from "probe-image-size"
import { images } from "./data/images"

export async function getImages(): Promise<Array<Image>> {
  return await Promise.all(
    images.map(async ({ label, href }) => {
      const size = await probe(href)

      return { label, href, size }
    })
  )
}

type Image = {
  label: string
  href: string
  size: ProbeResult
}
