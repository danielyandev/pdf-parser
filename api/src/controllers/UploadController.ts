import fs from "fs"
import {uploadFile} from "../requests/apache-tika";

const upload = async (req: any, res: any) => {
  try {
    const {response, error} = await uploadFile(fs.createReadStream(req.file.path))

    if (error) {
      return res.status(404).json({
        message: "Error while sending file to apache-tika"
      })
    }

    res.send(response.data)

  } catch (e: any) {
    res.status(422).send({message: e.message})
  }
}

export default {
  upload
}