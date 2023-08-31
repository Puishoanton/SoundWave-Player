import { ChangeEvent, FC, useRef } from 'react'

interface FileUploadProps {
  setFile: Function
  accept: string
  children: any
}

const FileUpload: FC<FileUploadProps> = ({ setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>(null)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0])
  }

  return (
    <div onClick={() => ref.current?.click()}>
      <input
        accept={accept}
        type='file'
        style={{ display: 'none' }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  )
}

export default FileUpload
