import { useState } from 'react'
import type { ChangeEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Homepage from './pages/index'

const initialForm = {
  nama: '',
  email: '',
  telepon: '',
  kota: '',
  pesan: '',
}

function App() {
  const [form, setForm] = useState(initialForm)
  // return(
  //   <Homepage />
  // )
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Form Input Live Preview</h1>
          <p>
            Isi 5 field di bawah ini, lalu hasilnya langsung tampil otomatis.
          </p>
        </div>
        <div className="form-preview">
          <form className="live-form">
            <label>
              Nama
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                placeholder="Masukkan nama"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Masukkan email"
              />
            </label>
            <label>
              No. Telepon
              <input
                type="tel"
                name="telepon"
                value={form.telepon}
                onChange={handleChange}
                placeholder="Masukkan no. telepon"
              />
            </label>
            <label>
              Kota
              <input
                type="text"
                name="kota"
                value={form.kota}
                onChange={handleChange}
                placeholder="Masukkan kota"
              />
            </label>
            <label>
              Pesan
              <textarea
                name="pesan"
                value={form.pesan}
                onChange={handleChange}
                placeholder="Tulis pesan singkat"
                rows={4}
              />
            </label>
          </form>

          <section className="preview-card" aria-live="polite">
            <h2>Hasil Input</h2>
            <p>
              <strong>Nama:</strong> {form.nama || '-'}
            </p>
            <p>
              <strong>Email:</strong> {form.email || '-'}
            </p>
            <p>
              <strong>No. Telepon:</strong> {form.telepon || '-'}
            </p>
            <p>
              <strong>Kota:</strong> {form.kota || '-'}
            </p>
            <p>
              <strong>Pesan:</strong> {form.pesan || '-'}
            </p>
          </section>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
