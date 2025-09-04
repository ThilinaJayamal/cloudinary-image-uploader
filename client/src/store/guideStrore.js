import { create } from 'zustand'
import axios from 'axios'

const useStore = create((set) => ({
    formData: null,
    setFormData: (data) => {
        return set({ ...formData, data })
    },

    handleSubmit: async () => {
        try {
            const { data } = await axios("http://");
        } catch (error) {
            console.log(error?.message)
        }
    },

    handleImageUpload: async () => {
        try {

        } catch (error) {

        }
    }
}))
