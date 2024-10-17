'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="bg-[#f3e8f9] p-8 min-h-screen flex flex-col justify-center">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5c37c0] text-center mb-4">Contáctanos</h1>
        <p className="text-center text-[#7054af] mb-8">
          ¡Muestra el lado más auténtico de tu marca con una web hecha a medida!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-[#724dc6] focus:ring-[#724dc6] focus:border-[#724dc6]"
            />
            <Input
              type="text"
              name="company"
              placeholder="Empresa"
              value={formData.company}
              onChange={handleChange}
              required
              className="border-[#724dc6] focus:ring-[#724dc6] focus:border-[#724dc6]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border-[#724dc6] focus:ring-[#724dc6] focus:border-[#724dc6]"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-[#724dc6] focus:ring-[#724dc6] focus:border-[#724dc6]"
            />
          </div>
          <Textarea
            name="message"
            placeholder="Cuéntanos sobre tu proyecto"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[100px] border-[#724dc6] focus:ring-[#724dc6] focus:border-[#724dc6]"
          />
          <Button type="submit" className="w-full bg-[#9c6fe9] text-black hover:bg-[#c4a4fb] rounded-full py-6 text-lg font-semibold">
            Enviar mensaje
          </Button>
        </form>
      </div>
    </div>
  )
}
