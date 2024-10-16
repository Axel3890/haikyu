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
    <div className="bg-white p-8 min-h-screen flex flex-col justify-center">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contáctanos</h1>
        <p className="text-center text-gray-600 mb-8">
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
            />
            <Input
              type="text"
              name="company"
              placeholder="Empresa"
              value={formData.company}
              onChange={handleChange}
              required
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
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <Textarea
            name="message"
            placeholder="Cuéntanos sobre tu proyecto"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[100px]"
          />
          <Button type="submit" className="w-full bg-yellow-300 text-black hover:bg-yellow-400 rounded-full py-6 text-lg font-semibold">
            Enviar mensaje
          </Button>
        </form>
      </div>


    </div>
  )
}