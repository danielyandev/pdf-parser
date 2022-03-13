import fs from "fs"
import {uploadFile} from "../requests/apache-tika";

const upload = async (req: any, res: any) => {
  try {
    const {response, error} = await uploadFile(fs.createReadStream(req.file.path))

    res.send(response.data)

  } catch (e: any) {
    res.status(500).send({message: e.message})
  }
}

export default {
  upload
}