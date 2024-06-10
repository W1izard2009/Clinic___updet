import toast from "react-hot-toast"

export const notification = (message, type) => {
    if(type)  toast['type'](message)
    else toast(message,   {
        style: {
          background: '#333',
          color: '#fff',
        },
      })
}