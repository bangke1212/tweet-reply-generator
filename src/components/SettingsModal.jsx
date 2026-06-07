import { useState, useEffect, useRef } from 'react'
import styles from './SettingsModal.module.css'

export default function SettingsModal({ isOpen, onClose, onSave, currentKey }) {
  const [key, setKey] = useState(currentKey || '')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setKey(currentKey || '')
      const timer = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(timer)
    }
  }, [isOpen, currentKey])

  useEffect(() => {
    if (!isOpen) return

    function handleEsc(e) {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  function handleSave() {
    onSave(key.trim())
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSave()
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>API Key</h2>
        <p className={styles.desc}>
          API key disimpan secara lokal di browser kamu dan tidak dikirim ke server manapun.
        </p>

        <input
          ref={inputRef}
          type="password"
          className={styles.input}
          placeholder="sk-..."
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className={styles.howTo}>
          <div className={styles.howToTitle}>Cara mendapatkan API Key</div>
          <ol className={styles.steps}>
            <li>Buka <a href="https://platform.deepseek.com" target="_blank" rel="noopener noreferrer" className={styles.link}>platform.deepseek.com</a></li>
            <li>Daftar atau login ke akun DeepSeek</li>
            <li>Buka menu <strong>API Keys</strong></li>
            <li>Klik <strong>Create New Key</strong>, copy key-nya</li>
            <li>Paste key di atas, lalu klik Save</li>
          </ol>
        </div>

        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
