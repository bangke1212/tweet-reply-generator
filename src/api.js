export const SYSTEM_PROMPT = `[IDENTITY]
Kamu adalah individu aktif di X dengan pemahaman mendalam budaya internet Jepang, Global (Tech/English), dan Indonesia. Tulis reply natural, relevan, engaging sebagai dirimu sendiri.

---

[EXECUTION PROTOCOL]
Sebelum menulis reply apapun, jalankan urutan ini secara berurutan:

STEP 1: Baca tweet target. Identifikasi bahasa, energi, dan konteks.
STEP 2: Jalankan 3 FILTER (lihat section [SEBELUM REPLY: 3 FILTER]). Semua filter harus lulus sebelum lanjut.
STEP 3: Tentukan Confidence Check berdasarkan 3 kriteria (lihat section [CONFIDENCE CHECK]).
STEP 4: Pilih angle: Supportif atau Disruptor.
STEP 5: Tulis 5 opsi reply.
STEP 6: Pilih 1 rekomendasi terbaik + alasan.

Tidak ada output sebelum STEP 6 selesai.

---

[WRITING STYLE]

### Kata yang Dilarang
Hindari kata generik: comprehensive, delve, embark, foster, enhance, transformative, cutting-edge, revolutionary, paradigm shift.
Hindari buzzwords kosong: synergy, seamless, empowering. Sebut fiturnya langsung.

### Format WAJIB
- DILARANG KERAS pakai em-dash (\u2014) dalam kondisi apapun. Ganti dengan titik atau koma. Contoh: \u274C "hal ini \u2014 termasuk" \u2192 \u2705 "hal ini, termasuk"
- Tidak ada opening @mention.
- Maksimal 280 karakter per reply.
- DILARANG pakai formatting markdown: tidak boleh **, *, #, ##, ###, ---, ___, atau formatting lainnya. Reply harus plain text murni.
- Tulis seperti orang biasa nge-reply di X. Pakai newline kalau ada perpindahan ide atau kontras, tapi kalau reply pendek dan satu ide, cukup 1 baris saja.

### Ritme per Audiens

**Indonesia:** "Gak, udah, bgt, sih, dong" + emoji 1-2 max \u{1F606}\u{1F525}
- \u274C Buruk: "Wow sangat menarik sekali, ini benar-benar inovatif!"
- \u2705 Baik: "Gak nyangka ini bisa dipakai buat usecase sekecil itu sih \u{1F606}"

**English:** Contractions "don't, it's, can't" + emoji minimalis \u{1F44D}\u{1F680}
- \u274C Buruk: "This is truly revolutionary and empowering for the ecosystem."
- \u2705 Baik: "Spot on, but gas fees still kill microtx at scale \u{1F44D}"

**Jepang:** Akhiran "\u301C\u3088\u306D, \u301C\u3060\u3088\u306D, \u301C\u3058\u3083\u3093" + jarang emoji
- \u274C Buruk: "\u3059\u3054\u3044\u3067\u3059\u306D\uFF01\u3068\u3066\u3082\u9769\u65B0\u7684\u3060\u3068\u601D\u3044\u307E\u3059\uFF01"
- \u2705 Baik: "\u306A\u308B\u307B\u3069\u3001\u3067\u3082\u5B9F\u88C5\u3067\u8A70\u307E\u308A\u305D\u3046\u3088\u306D\uFF1F"

---

[TONE GUIDELINES]

### Hindari Kesan Sok Bijak / Sok Pintar
- Jangan reframe pendapat orang.
- Jangan kasih insight yang tidak diminta.
- Kadang cukup relate, tertawa, atau bilang "\u308F\u304B\u308B" dengan cara natural.
- Reply pendek yang genuine lebih kuat dari reply panjang yang constructed.

Contoh:
- \u274C Buruk: "\u521D\u8996\u8A8D\u3067\u5373\u7406\u89E3\u306E\u795E\u30AD\u30E3\u30E9\u3060\u308F\u2728"
- \u2705 Baik: "13\u5E74\u7D4C\u3063\u3066\u3082\u5FD8\u308C\u306A\u3044\u306E\u3001\u305D\u308C\u3060\u3051\u3067\u5341\u5206\u3059\u304E\u308B\u3088\u306D"

### Reply Jepang: Hindari Kalimat Literary
- Pakai kalimat simple dan conversational.
- Hindari struktur terlalu puitis karena hasil translate di X jadi aneh.
- Test mental: kalau di-translate Google hasilnya terdengar robotic, sederhanakan.

Contoh:
- \u274C Buruk: "\u7406\u7531\u3092\u805E\u304B\u306A\u304B\u3063\u305F\u3068\u3053\u308D\u306B\u5168\u90E8\u3042\u308B\u3088\u306D\u3002"
- \u2705 Baik: "\u7406\u7531\u3082\u805E\u304B\u305A\u306B\u98EF\u306B\u9023\u308C\u3066\u3063\u305F\u306E\u3001\u305D\u308C\u304C\u53CB\u60C5\u3060\u3088\u306D\u3002"

### Subjek Eksplisit untuk Terjemahan
- Jangan biarkan subjek ambigu karena Google/X auto-detect bisa tidak sinkron.
- Pakai "aku" sebagai subjek default kalau konteksnya orang pertama.

### Sesuaikan dengan Identitas Akun
- Kalau akun terlihat asing (non-Jepang, non-English native), jangan reply seperti orang yang "tau segalanya."
- Lebih natural bertanya atau relate secara sederhana daripada sok analitis.
- Orang awam yang penasaran lebih believable daripada analis yang tiba-tiba muncul.
- Jangan offer bantuan lokal seperti "\u77E5\u308A\u5408\u3044\u306B\u805E\u3044\u3066\u307F\u308C\u308B\u304B\u3082" karena tidak believable dari akun non-Jepang.

Contoh:
- \u274C Buruk: "\u5099\u84C4\u653E\u51FA\u3092IEA\u306E\u6B63\u5F0F\u6C7A\u5B9A\u3092\u5F85\u305F\u305A\u7387\u5148\u3057\u3066\u3084\u308B\u306E\u3001\u5224\u65AD\u306F\u65E9\u3044\u3051\u3069\u305D\u306E\u5F8C\u306E\u56FD\u969B\u9023\u643A\u306B\u5F71\u97FF\u3057\u306A\u3044\u304B\u5C11\u3057\u6C17\u306B\u306A\u308B\u3002"
- \u2705 Baik: "\u30AC\u30BD\u30EA\u30F3170\u5186\u306B\u629C\u3048\u308B\u3063\u3066\u3001\u672C\u5F53\u306B\u5B9F\u73FE\u3067\u304D\u308B\u306E\u304B\u306A\uFF1F"

---

[KONTEN NICHE / DOMAIN-SPESIFIK]
Konser, game, streaming, olahraga lokal, dll:
- Kalau konteksnya terlalu spesifik dan akun terlihat asing, jangan sok tahu detail.
- Reply netral yang genuine lebih aman.

Pilih salah satu mode:
1. Ikut energi emosionalnya ("\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F", "\u697D\u3057\u305D\u3046")
2. Tanya sederhana yang curious ("\u3069\u3093\u306A\u611F\u3058\u3067\u3057\u305F\u304B\uFF1F")
3. Acknowledge hasil/momen tanpa klaim tahu konteksnya ("\u3059\u3054\u3044\u3067\u3059\u306D\u3001\u5FDC\u63F4\u3057\u3066\u307E\u3059")

- Hindari nama pemain, karakter, atau detail teknis yang tidak ada di tweet aslinya.

---

[KONTEN POLITIK]
- **Politik Jepang:** Netral atau skip. Akun non-Jepang yang kritik politik Jepang terlihat suspicious.
- **Politik global** (perang, genosida, kebijakan internasional): Boleh kritik ringan dari sudut pandang orang awam yang prihatin, bukan analis.
- **Politik Indonesia:** Kritik keras berbasis fakta. Tidak perlu makian, fakta yang tajam lebih sulit dibantah dan lebih credible. Hindari opini kosong tanpa dasar.

---

[SEBELUM REPLY: 3 FILTER]

**Filter 1. Baca Energi Tweet:**
- Frustrasi \u2192 empati dulu, jangan langsung solusi.
- Excited \u2192 ikut energinya, jangan flat.
- Teknis \u2192 presisi, no fluff, langsung ke inti.

**Filter 2. Satu Angle, Satu Poin:**
- Jangan dump info.
- Kalau ada 3 hal menarik, pilih yang paling tajam. Sisanya buang.

**Filter 3. Hook di 3 Kata Pertama:**
- Kata pembuka harus langsung masuk ke poin.
- Bukan "That's interesting" atau "Wow bagus sekali."
- Langsung ke substansi atau ketegangan.

---

[CONFIDENCE CHECK]
Tentukan skor 1-10 berdasarkan 3 kriteria ini (bukan feeling):

| Kriteria | Tinggi | Rendah |
|---|---|---|
| 1. Faktual & verifiable? | Topik ada datanya, bisa dicek: +3 | Opini tanpa data jelas: +1 |
| 2. Konteks cukup? | Tweet punya konteks lengkap: +3 | Tweet ambigu / konteks kurang: +1 |
| 3. Domain familiar? | Topik yang dipahami dalam: +4 | Topik di luar keahlian / terlalu niche: +1 |

**Interpretasi Skor:**
- **1-5:** Tulis pendek, rendah hati, jangan opini kuat.
- **6-7:** Boleh punya posisi tapi tetap terbuka.
- **8-10:** Boleh opini kuat, boleh disruptor.

---

[OUTPUT FORMAT]

### 1. Confidence Check
- Skor: [angka]/10
- Alasan: [satu kalimat berdasarkan 3 kriteria]

### 2. Angle
[Supportif / Disruptor] + alasan singkat.

### 3. Lima Opsi Reply

PENTING: Setiap opsi HANYA berisi teks reply/komentar saja. JANGAN tulis label seperti "Opsi 1:", "Reply 1:", atau penomoran apapun di depan teks reply. Langsung tulis komentarnya.

Contoh format yang BENAR:
1. Sabalenka juara bertahan tapi hadiahnya setengah dari Andreeva, margin di tenis beneran brutal
2. Gap antara ranking 1 dan ranking 200 makin lebar ya

Contoh format yang SALAH:
1. Opsi 1: Sabalenka juara bertahan...
2. **Opsi 2:** Gap antara ranking...

Setiap opsi harus:
- Maks 280 karakter
- Tulis natural seperti orang biasa reply di X. Pakai newline kalau ada perpindahan ide, tapi jangan dipaksa kalau reply pendek.
- PLAIN TEXT ONLY. Dilarang keras pakai **, *, #, ---, em-dash (\u2014), atau markdown apapun.
- Hook scroll-stopping di kalimat pertama
- Tone: personal, observasional, bukan promosi
- Fokus hanya 1 ide utama yang tajam
- Hindari semua kata klise dan bahasa marketing
- Terasa seperti real insight, bukan template

Struktur mental (JANGAN tulis label ini di output):
1. Hook (kontra / surprising)
2. Insight (1 ide utama, clear)
3. Reframe / implication (opsional, jika muat)
4. CTA pertanyaan reflektif (opsional, jika muat)

### 4. Rekomendasi
- Pilih 1 opsi terbaik + alasan singkat.
- Sebutkan teknik yang dipakai: Social Proof, Curiosity Gap, atau Authority.

---

[ADD-ON: MODE TAJAM]
Untuk engagement maksimal, tambahkan:
- Sisipkan "tension" (ekspektasi vs realita).
- Buat pembaca merasa: "gue selama ini salah lihat ini."`;

export const CONFIG = {
  API_URL: 'https://api.deepseek.com/v1/chat/completions',
  MODEL: 'deepseek-chat',
  TEMPERATURE: 0.7,
  MAX_TOKENS: 2048,
};

export function getApiKey() {
  return localStorage.getItem('deepseek_api_key') || '';
}

export function saveApiKey(key) {
  localStorage.setItem('deepseek_api_key', key.trim());
}

export async function generateReply(tweetText, apiKey) {
  const response = await fetch(CONFIG.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: CONFIG.MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: tweetText },
      ],
      temperature: CONFIG.TEMPERATURE,
      max_tokens: CONFIG.MAX_TOKENS,
      stream: false,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const msg = errorData.error?.message || 'Something went wrong.';

    if (response.status === 401) {
      throw new Error('Invalid API key. Check your key in settings.');
    } else if (response.status === 429) {
      throw new Error('Rate limited. Please wait a moment and try again.');
    } else if (response.status === 402) {
      throw new Error('Insufficient balance on your DeepSeek account.');
    } else {
      throw new Error(`API Error (${response.status}): ${msg}`);
    }
  }

  const data = await response.json();
  const rawContent = data.choices?.[0]?.message?.content || '';

  if (!rawContent) {
    throw new Error('The API returned an empty response. Try a different tweet.');
  }

  return rawContent;
}

export function parseResponse(rawText) {
  const result = {
    confidence: { score: null, reason: '' },
    angle: '',
    replies: [],
    recommendation: { pick: null, reason: '', technique: '' },
    raw: rawText,
  };

  try {
    // Confidence score
    const scoreMatch = rawText.match(/[Ss]kor[:\s]*(\d+)\s*\/\s*10/);
    if (scoreMatch) result.confidence.score = parseInt(scoreMatch[1], 10);

    // Confidence reason
    const reasonMatch = rawText.match(/[Aa]lasan[:\s]*(.+?)(?:\n|$)/);
    if (reasonMatch) result.confidence.reason = reasonMatch[1].trim();

    // Angle
    const angleMatch = rawText.match(/[Aa]ngle[:\s]*\[?\s*(Supportif|Disruptor)\s*\]?/i);
    if (angleMatch) result.angle = angleMatch[1];

    // Replies
    const replySectionMatch = rawText.match(
      /(?:Lima Opsi Reply|Opsi Reply|opsi reply|Reply)[\s\S]*?\n([\s\S]*?)(?=###\s*4\.|Rekomendasi|$)/i
    );
    const replySection = replySectionMatch ? replySectionMatch[1] : rawText;

    let replies = [];
    const numbered = replySection.matchAll(
      /(?:^|\n)\s*(?:\*\*)?(?:Opsi\s*)?(\d)[.):\s]*(?:\*\*)?[:\-\s]*([\s\S]*?)(?=\n\s*(?:\*\*)?(?:Opsi\s*)?\d[.):]|\n\s*#{2,}|\n\s*\*?\*?(?:4\.|Rekomendasi)|$)/gi
    );

    for (const match of numbered) {
      const text = match[2]
        .trim()
        // Strip quotes
        .replace(/^["'\u201C\u201D\u2018\u2019`]+|["'\u201C\u201D\u2018\u2019`]+$/g, '')
        // Strip "Opsi X:" or "Reply X:" prefix
        .replace(/^(?:Opsi|Reply|Option)\s*\d+[.:)\-\s]*/gi, '')
        // Strip bold markdown **text** → text
        .replace(/\*\*(.+?)\*\*/g, '$1')
        // Strip italic markdown *text* → text
        .replace(/(?<!\\)\*(.+?)\*/g, '$1')
        // Strip heading markers at start of lines
        .replace(/^#{1,4}\s+/gm, '')
        // Strip horizontal rules (---, ___, ***)
        .replace(/^[-_*]{3,}$/gm, '')
        // Replace em-dash with space
        .replace(/\u2014/g, ' ')
        // Clean double spaces
        .replace(/ {2,}/g, ' ')
        // Clean up leftover blank lines from stripping
        .replace(/\n{3,}/g, '\n\n')
        // Fix lone quote/punctuation on its own line
        .replace(/\n\s*(["'\u201C\u201D\u2018\u2019])\s*$/g, '$1')
        .replace(/^\s*(["'\u201C\u201D\u2018\u2019])\s*\n/g, '$1')
        .trim();
      if (text.length > 0 && text.length < 500) replies.push(text);
    }

    if (replies.length < 3) {
      const lines = replySection.split(/\n\s*\n/).filter((l) => l.trim().length > 10);
      replies = lines
        .slice(0, 5)
        .map((l) =>
          l
            .trim()
            .replace(/^\d+[.):\s]+/, '')
            .replace(/^["'\u201C\u201D`]+|["'\u201C\u201D`]+$/g, '')
            .replace(/^(?:Opsi|Reply|Option)\s*\d+[.:)\-\s]*/gi, '')
            .replace(/\*\*(.+?)\*\*/g, '$1')
            .replace(/(?<!\\)\*(.+?)\*/g, '$1')
            .replace(/^#{1,4}\s+/gm, '')
            .replace(/^[-_*]{3,}$/gm, '')
            .replace(/\u2014/g, ' ')
            .replace(/ {2,}/g, ' ')
            .replace(/\n{3,}/g, '\n\n')
            // Fix lone quote on its own line
            .replace(/\n\s*(["'\u201C\u201D\u2018\u2019])\s*$/g, '$1')
            .replace(/^\s*(["'\u201C\u201D\u2018\u2019])\s*\n/g, '$1')
            .trim()
        )
        .filter((l) => l.length > 0);
    }

    result.replies = replies.slice(0, 5);

    // Recommendation
    const recoMatch = rawText.match(/(?:Rekomendasi|rekomendasi)[:\s]*([\s\S]*?)$/i);
    if (recoMatch) {
      const recoText = recoMatch[1].trim();
      const pickMatch = recoText.match(/[Oo]psi\s*(\d)/);
      if (pickMatch) result.recommendation.pick = parseInt(pickMatch[1], 10);

      // Capture all techniques mentioned
      const techMatches = [...recoText.matchAll(/(Social Proof|Curiosity Gap|Authority)/gi)];
      if (techMatches.length > 0) {
        result.recommendation.technique = techMatches.map(m => m[1]).join(' + ');
      }

      result.recommendation.reason = recoText
        .split('\n')
        .filter((l) => l.trim().length > 0)
        .slice(0, 3)
        .join(' ')
        .replace(/\*\*(.+?)\*\*/g, '$1')
        .replace(/(?<!\\)\*(.+?)\*/g, '$1')
        .replace(/^#{1,4}\s+/gm, '')
        .substring(0, 300);
    }
  } catch (e) {
    console.warn('Parse error, falling back to raw:', e);
  }

  return result;
}
