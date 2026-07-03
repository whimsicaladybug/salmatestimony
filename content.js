/* ============================================================
   content.js
   ------------------------------------------------------------
   This is the SINGLE SOURCE OF TRUTH for every page on the site.
   To add, rename, or restructure a section, you only ever need
   to edit THIS file — script.js reads from this and builds the
   whole site automatically.

   HOW TO ADD A NEW SLIDE-SECTION (image-based, like "Salvation"):
     1. Put your PNGs in assets/slides/your-folder-en/01.png, 02.png...
     2. Add an entry to SECTIONS below, type: "slides"
     3. Done — script.js will render it automatically.

   HOW TO ADD A NEW STORY-SECTION (text + inline images, like "My Story"):
     1. Write your HTML in the `html` field for "en" and "id" below
        (or point to a separate file if it gets long — see myStoryContent.js)
     2. Add an entry to SECTIONS below, type: "story"

   FIELDS PER SECTION:
     id          - unique slug, used in the URL (e.g. #historical-jesus)
     title       - { en, id } display name shown in nav/back-buttons
     type        - "slides" | "story"
     parent      - which menu this belongs under: "main", "jesus", "scripture"
     folder      - { en, id } folder name inside assets/slides/ (slides type only)
     slideCount  - { en, id } how many numbered PNGs are in that folder
     html        - { en, id } raw HTML content (story type only)
   ============================================================ */

const SITE_CONFIG = {

  // ---- Top-level pages (not in SECTIONS because they're menus, not content) ----
  homepage: {
    image: { en: "assets/images/homepage-en.png", id: "assets/images/homepage-id.png" }
  },
  mainMenu: {
    image: { en: "assets/images/menu-en.png", id: "assets/images/menu-id.png" }
  },
  jesusMenu: {
    image: { en: "assets/images/jesus-en.png", id: "assets/images/jesus-id.png" }
  },
  scriptureMenu: {
    image: { en: "assets/images/scripture-en.png", id: "assets/images/scripture-id.png" }
  }
};

/* ============================================================
   SECTIONS
   Every piece of actual content (not a menu) lives here.
   Order in this array = order used for any "next/prev" features
   later, but does NOT affect the menu layout (that's positioned
   via clickable areas in script.js / style.css).
   ============================================================ */

const SECTIONS = [

  {
    id: "my-story",
    title: { en: "My Story", id: "Ceritaku" },
    type: "story",
    parent: "main",
    html: {
      en: `
        <h2 class="story-heading">I Wasn't Looking for Change, But I Found It</h2>
        <p class="story-subtitle">A personal journey of faith, questions, and choosing what I believe</p>

        <p>Hey, it's Salma.</p>
        <p>This is not a phase of confusion anymore. This is a decision I've come to after a long and personal journey.</p>
        <p>I grew up as a Muslim, and for most of my life, I never questioned my faith. It was part of who I was — something I believed in, practiced, and tried to live sincerely.</p>
        <p>I chose to take my faith seriously. I wore the hijab, avoided physical contact with non-mahram men, and stayed away from relationships. I believed in having one partner for life. I even dreamed of going to Umrah and Hajj one day with my future husband and building a family grounded in faith.</p>
        <p>In 2023, I went through one of the lowest points in my life — when my mom passed away.</p>
        <p>I was completely broken. At one point, I even had thoughts of ending my life. But I held on, because I believed that God (Allah) loved me and that my life still had a purpose.</p>
        <p>That belief kept me alive.</p>
        <p>That same year, I became even closer to God. I prayed more, woke up for tahajud, made dua constantly, and tried to live my faith more sincerely than ever before.</p>
        <p>And it helped.</p>
        <p>I found peace again. I felt grounded. I truly loved my religion.</p>
        <p>I lived like that for 20 years. And then, things started to change.</p>

        <hr class="story-divider" />

        <p>Everything began when I reconnected with someone from college. His name is Joy. He's a Christian.</p>
        <p>We weren't close at first — just acquaintances who had worked together as practicum assistants. But toward the end of 2024, we started talking more. It began casually — replying to stories, sharing small things — but somehow, everything just clicked.</p>
        <p>By early 2025, we were talking almost every day.</p>
        <p>And yes, I'm aware of how ironic it sounds — someone like me, who held tightly to religious values, ending up in a situationship with a Christian guy.</p>
        <p>At first, I didn't think it would go anywhere. I assumed it would stay light and temporary, especially because we both knew how complicated it would be.</p>
        <p>But what made this different wasn't just the connection. It was the conversations.</p>
        <p>We talked about everything — our values, our goals, our perspectives on life, and eventually, our beliefs. Not to debate. Not to convert each other. But to understand.</p>
        <p>We respected each other's practices. I remember how he would even wait for me to pray and remind me when it was time.</p>
        <p>But at the same time, we couldn't ignore reality. We both believed that religion matters — especially when it comes to the future, marriage, and building a family.</p>
        <p>So we made a decision: if we were going to continue, we needed to talk about our beliefs seriously.</p>

        <hr class="story-divider" />

        <p>We agreed on one thing — we would not force each other to convert. Faith is personal. It's a relationship with God.</p>
        <p>But we also knew that if nothing changed, we would eventually have to let each other go.</p>
        <p>I remember praying every day, even waking up for tahajud, asking that he would one day convert to Islam. And he told me he was praying for the same thing — for me to become Christian.</p>
        <p>Looking back, it's almost ironic. But it was real.</p>

        <hr class="story-divider" />

        <p>Through those conversations, something started to shift in me. For the first time, I wasn't just practicing my faith. I was questioning it.</p>
        <p>I started exploring more — about the life and identity of Jesus Christ, and how differently He is understood across beliefs.</p>
        <p>I began reading parts of the Bible — not as an outsider, but as someone genuinely searching.</p>
        <p>At the same time, I revisited my understanding of the Qur'an — not just from habit, but from a place of questioning.</p>
        <p>And slowly, something changed.</p>

        <hr class="story-divider" />

        <p>Even after seeing all of this, a part of me was still resisting. I understood more. I questioned more. But deep down, something in me was still holding back.</p>
        <p>And then, one day, something unexpected happened.</p>
        <p>I went to a photocopy shop to pick up my sister's order. It was just a normal day — nothing special, nothing planned.</p>
        <p>But as I was there, something caught my attention. There was a large pamphlet displayed, and at the top of it was a simple sentence:</p>
        <blockquote class="story-quote">"God is not done with me yet."</blockquote>
        <p>Below it, there was a Bible verse from Isaiah 46:4:</p>
        <blockquote class="story-quote">"Even to your old age I am He, and to gray hairs I will carry you. I have made, and I will bear; I will carry and will save."</blockquote>

        <img src="assets/images/my-story-pamphlet.jpg" alt="The pamphlet at the photocopy shop — Isaiah 46:4" class="story-img" />

        <p>I froze.</p>
        <p>It might seem like a small thing, but in that moment, it didn't feel random to me. It felt personal. It felt like something I couldn't ignore.</p>
        <p>I remember telling Joy about it, and he was genuinely happy. He said it felt like God was speaking to me.</p>
        <p>And for the first time, I didn't dismiss that idea. Because deep down, I felt it too. Not in a loud or dramatic way — but in a quiet, undeniable sense that this moment meant something.</p>
        <p>And from that point on, it became harder for me to keep denying what I had been encountering all along.</p>

        <hr class="story-divider" />

        <p>As I continued exploring Christianity, I realized something I couldn't ignore. I was drawn to it.</p>
        <p>The concept of grace changed the way I understood faith. The idea that my relationship with God is not based on how perfectly I perform, but on what God has already done — it challenged everything I thought I knew.</p>
        <p>I also found myself drawn to how Christianity presents God — not only as great and powerful, but also as personal and relational.</p>
        <p>And then there is Jesus. The more I learned about Him, the more I realized I could not stay neutral. I had to make a decision.</p>

        <hr class="story-divider" />

        <p>And now, I have.</p>
        <p>This is not something I say lightly. After everything I have questioned, explored, and experienced — I am convinced. This is what I believe.</p>
        <p>Not because of a person. Not because of pressure. And not purely because of emotion.</p>
        <p>But because I chose to seek, to question, and to understand honestly. And this is where that journey led me.</p>

        <hr class="story-divider" />

        <p>This is not me trying to attack any belief. And it's not me claiming that I have everything figured out.</p>
        <p>I'm still learning. I'm still growing.</p>
        <p>But I am no longer uncertain about where I stand.</p>
        <p>If you're reading this with questions, curiosity, or even disagreement — that's okay. I'm open to respectful conversations — not to win arguments, but to share and to understand.</p>
        <p>Because at the end of the day, this is not just about being right. It's about seeking truth — honestly.</p>
        <p>Thank you to anyone who took the time to read my journey.</p>
        <p>God bless you 🤍</p>
      `,
      id: `
        <h2 class="story-heading">Aku Tidak Sedang Mencari Perubahan, Tapi Aku Menemukannya</h2>
        <p class="story-subtitle">Perjalanan pribadi tentang iman, pertanyaan, dan memilih apa yang aku percaya</p>

        <p>Hei, ini Salma.</p>
        <p>Ini bukan lagi fase kebingungan. Ini adalah keputusan yang aku ambil setelah perjalanan yang panjang dan sangat personal.</p>
        <p>Aku tumbuh sebagai seorang Muslim, dan selama sebagian besar hidupku, aku tidak pernah mempertanyakan imanku. Itu adalah bagian dari diriku — sesuatu yang aku yakini, praktikkan, dan coba jalani dengan tulus.</p>
        <p>Aku memilih untuk serius dalam menjalankan agamaku. Aku memakai hijab, menghindari kontak fisik dengan laki-laki non-mahram, dan menjauh dari hubungan romantis. Aku percaya pada satu pasangan seumur hidup. Aku bahkan bermimpi suatu hari bisa pergi Umrah dan Haji bersama suamiku kelak, dan membangun keluarga yang berlandaskan iman.</p>
        <p>Pada tahun 2023, aku melewati salah satu titik terendah dalam hidupku — ketika ibuku meninggal dunia.</p>
        <p>Aku hancur total. Di satu titik, aku bahkan sempat punya pikiran untuk mengakhiri hidupku. Tapi aku bertahan, karena aku percaya bahwa Allah mencintaiku dan hidupku masih punya tujuan.</p>
        <p>Keyakinan itulah yang membuatku tetap hidup.</p>
        <p>Di tahun yang sama, aku semakin dekat dengan Allah. Aku lebih sering shalat, bangun untuk tahajud, terus berdoa, dan berusaha menjalani iman dengan lebih tulus dari sebelumnya.</p>
        <p>Dan itu membantu.</p>
        <p>Aku menemukan kedamaian lagi. Aku merasa teguh. Aku benar-benar mencintai agamaku.</p>
        <p>Aku menjalani hidup seperti itu selama 20 tahun. Dan kemudian, segalanya mulai berubah.</p>

        <hr class="story-divider" />

        <p>Semuanya bermula ketika aku kembali berhubungan dengan seseorang dari kampus. Namanya Joy. Dia seorang Kristen.</p>
        <p>Kami tidak terlalu dekat awalnya — hanya kenalan yang pernah bekerja bersama sebagai asisten praktikum. Tapi menjelang akhir 2024, kami mulai lebih sering berbicara. Awalnya santai — membalas stories, berbagi hal-hal kecil — tapi entah bagaimana, semuanya terasa cocok.</p>
        <p>Pada awal 2025, kami hampir berbicara setiap hari.</p>
        <p>Dan ya, aku sadar betapa ironisnya kedengarannya — seseorang seperti aku, yang berpegang teguh pada nilai-nilai agama, akhirnya berada dalam situationship dengan laki-laki Kristen.</p>
        <p>Awalnya, aku tidak berpikir ini akan ke mana-mana. Aku mengira ini akan tetap ringan dan sementara, terutama karena kami berdua tahu betapa rumitnya situasi ini.</p>
        <p>Tapi yang membuat ini berbeda bukan hanya koneksinya. Melainkan percakapan-percakapannya.</p>
        <p>Kami membicarakan segalanya — nilai-nilai kami, tujuan hidup kami, cara pandang kami terhadap kehidupan, dan akhirnya, kepercayaan kami. Bukan untuk berdebat. Bukan untuk saling mengkonversi. Tapi untuk saling memahami.</p>
        <p>Kami menghormati praktik satu sama lain. Aku ingat bagaimana dia bahkan mau menungguku shalat dan mengingatkanku ketika waktunya tiba.</p>
        <p>Tapi pada saat yang sama, kami tidak bisa mengabaikan kenyataan. Kami berdua percaya bahwa agama itu penting — terutama menyangkut masa depan, pernikahan, dan membangun keluarga.</p>
        <p>Jadi kami membuat sebuah keputusan: jika kami akan melanjutkan ini, kami perlu membicarakan kepercayaan kami secara serius.</p>

        <hr class="story-divider" />

        <p>Kami sepakat pada satu hal — kami tidak akan memaksa satu sama lain untuk berpindah keyakinan. Iman itu personal. Ini adalah hubungan dengan Tuhan.</p>
        <p>Tapi kami juga tahu bahwa jika tidak ada yang berubah, pada akhirnya kami harus melepaskan satu sama lain.</p>
        <p>Aku ingat berdoa setiap hari, bahkan bangun untuk tahajud, meminta agar dia suatu hari masuk Islam. Dan dia bercerita bahwa dia juga berdoa untuk hal yang sama — agar aku menjadi Kristen.</p>
        <p>Melihat ke belakang, ini terasa ironis. Tapi itu nyata.</p>

        <hr class="story-divider" />

        <p>Melalui percakapan-percakapan itu, sesuatu mulai bergeser dalam diriku. Untuk pertama kalinya, aku tidak hanya menjalankan imanku. Aku mempertanyakannya.</p>
        <p>Aku mulai mengeksplorasi lebih jauh — tentang kehidupan dan identitas Yesus Kristus, dan bagaimana Ia dipahami secara berbeda dalam berbagai keyakinan.</p>
        <p>Aku mulai membaca bagian-bagian dari Alkitab — bukan sebagai orang luar, tapi sebagai seseorang yang benar-benar sedang mencari.</p>
        <p>Pada saat yang sama, aku juga kembali menelaah pemahamanku tentang Al-Qur'an — bukan hanya karena kebiasaan, tapi dari tempat yang penuh pertanyaan.</p>
        <p>Dan perlahan, sesuatu berubah.</p>

        <hr class="story-divider" />

        <p>Bahkan setelah melihat semua ini, ada bagian dari diriku yang masih menolak. Aku memahami lebih banyak. Aku mempertanyakan lebih banyak. Tapi jauh di dalam diri, ada sesuatu yang masih menahan.</p>
        <p>Dan kemudian, suatu hari, sesuatu yang tidak terduga terjadi.</p>
        <p>Aku pergi ke toko fotokopi untuk mengambil pesanan adikku. Itu hanya hari biasa — tidak ada yang istimewa, tidak ada yang direncanakan.</p>
        <p>Tapi saat aku di sana, sesuatu menarik perhatianku. Ada pamflet besar yang dipajang, dan di bagian atasnya tertulis kalimat sederhana:</p>
        <blockquote class="story-quote">"God is not done with me yet."<br/><span style="font-size:0.9em;opacity:0.85;">("Tuhan belum selesai dengan hidupku.")</span></blockquote>
        <p>Di bawahnya, ada ayat Alkitab dari Yesaya 46:4:</p>
        <blockquote class="story-quote">"Sampai masa tuamu Aku tetap Dia, dan sampai rambutmu putih Aku akan menggendong kamu. Aku telah melakukan dan Aku akan menanggung, Aku akan menggendong dan menyelamatkan kamu."</blockquote>

        <img src="assets/images/my-story-pamphlet.jpg" alt="Pamflet di toko fotokopi — Yesaya 46:4" class="story-img" />

        <p>Aku terpaku.</p>
        <p>Mungkin terdengar sepele, tapi di momen itu, rasanya tidak terasa kebetulan bagiku. Rasanya personal. Seperti sesuatu yang tidak bisa aku abaikan.</p>
        <p>Aku ingat menceritakannya kepada Joy, dan dia sangat bahagia. Dia berkata bahwa itu terasa seperti Tuhan sedang berbicara kepadaku.</p>
        <p>Dan untuk pertama kalinya, aku tidak menolak gagasan itu. Karena jauh di dalam diri, aku merasakannya juga. Bukan dengan cara yang keras atau dramatis — tapi dengan perasaan yang tenang dan tak terbantahkan bahwa momen ini bermakna.</p>
        <p>Dan sejak saat itu, semakin sulit bagiku untuk terus menyangkal apa yang selama ini aku temui.</p>

        <hr class="story-divider" />

        <p>Ketika aku terus mengeksplorasi Kekristenan, aku menyadari sesuatu yang tidak bisa aku abaikan. Aku tertarik padanya.</p>
        <p>Konsep kasih karunia mengubah cara aku memahami iman. Gagasan bahwa hubunganku dengan Tuhan tidak didasarkan pada seberapa sempurna aku melakukan segala sesuatu, tapi pada apa yang Tuhan telah lakukan — itu menantang semua yang aku kira aku tahu.</p>
        <p>Aku juga merasa tertarik pada bagaimana Kekristenan menggambarkan Tuhan — tidak hanya sebagai yang Maha Besar dan Berkuasa, tapi juga sebagai pribadi yang dekat dan memiliki relasi dengan manusia.</p>
        <p>Dan kemudian ada Yesus. Semakin banyak aku belajar tentang-Nya, semakin aku menyadari bahwa aku tidak bisa tetap netral. Aku harus membuat keputusan.</p>

        <hr class="story-divider" />

        <p>Dan sekarang, aku telah membuatnya.</p>
        <p>Ini bukan sesuatu yang aku katakan dengan ringan. Setelah semua yang telah aku pertanyakan, eksplorasi, dan alami — aku yakin. Inilah yang aku percaya.</p>
        <p>Bukan karena seseorang. Bukan karena tekanan. Dan bukan semata-mata karena emosi.</p>
        <p>Tapi karena aku memilih untuk mencari, mempertanyakan, dan memahami dengan jujur. Dan inilah ke mana perjalanan itu membawaku.</p>

        <hr class="story-divider" />

        <p>Ini bukan usahaku untuk menyerang keyakinan siapapun. Dan ini bukan aku mengklaim bahwa aku sudah paham segalanya.</p>
        <p>Aku masih belajar. Aku masih bertumbuh.</p>
        <p>Tapi aku tidak lagi ragu di mana aku berdiri.</p>
        <p>Jika kamu membaca ini dengan pertanyaan, rasa ingin tahu, atau bahkan ketidaksetujuan — tidak apa-apa. Aku terbuka untuk percakapan yang penuh hormat — bukan untuk memenangkan argumen, tapi untuk berbagi dan memahami.</p>
        <p>Karena pada akhirnya, ini bukan hanya tentang siapa yang benar. Ini tentang mencari kebenaran — dengan jujur.</p>
        <p>Terima kasih kepada siapapun yang meluangkan waktu untuk membaca perjalananku ini.</p>
        <p>Tuhan memberkati kamu 🤍</p>
      `
    }
  },

  {
    id: "concept",
    title: { en: "Concept & Nature of God", id: "Konsep & Sifat Tuhan" },
    type: "slides",
    parent: "main",
    folder: { en: "concept-en", id: "konsep-id" },
    slideCount: { en: 9, id: 9 }
  },

  {
    id: "salvation",
    title: { en: "Salvation", id: "Keselamatan" },
    type: "slides",
    parent: "main",
    folder: { en: "salvation-en", id: "keselamatan-id" },
    slideCount: { en: 4, id: 4 }
  },

  {
    id: "islamic-dilemma",
    title: { en: "The Islamic Dilemma", id: "Dilema dalam Islam" },
    type: "slides",
    parent: "main",
    folder: { en: "islamic-dilemma-en", id: "dilema-islam-id" },
    slideCount: { en: 8, id: 8 }
  },

  {
    id: "final-note",
    title: { en: "Final Note", id: "Catatan Penutup" },
    type: "slides",
    parent: "main",
    folder: { en: "final-note-en", id: "catatan-penutup-id" },
    slideCount: { en: 1, id: 1 }
  },

  // ---- Jesus Menu children ----
  {
    id: "historical-jesus",
    title: { en: "Historical Jesus", id: "Yesus dalam Sejarah" },
    type: "slides",
    parent: "jesus",
    folder: { en: "historical-jesus-en", id: "yesus-sejarah-id" },
    slideCount: { en: 11, id: 11 }
  },
  {
    id: "jesus-in-islam",
    title: { en: "Jesus in Islam", id: "Yesus dalam Islam" },
    type: "slides",
    parent: "jesus",
    folder: { en: "jesus-in-islam-en", id: "yesus-dalam-islam-id" },
    slideCount: { en: 9, id: 9 }
  },
  {
    id: "jesus-divine",
    title: { en: "Why I Came to See Jesus as Divine", id: "Mengapa Aku Percaya Yesus adalah Tuhan" },
    type: "slides",
    parent: "jesus",
    folder: { en: "jesus-divine-en", id: "yesus-tuhan-id" },
    slideCount: { en: 17, id: 17 }
  },

  // ---- Scripture Menu children ----
  {
    id: "bible",
    title: { en: "The Bible", id: "Alkitab" },
    type: "slides",
    parent: "scripture",
    folder: { en: "bible-en", id: "alkitab-id" },
    slideCount: { en: 9, id: 9 }
  },
  {
    id: "quran",
    title: { en: "The Qur'an", id: "Al-Qur'an" },
    type: "slides",
    parent: "scripture",
    folder: { en: "quran-en", id: "al-quran-id" },
    slideCount: { en: 11, id: 11 }
  }
];

/* Quick lookup helper: find a section by its id */
function getSectionById(id) {
  return SECTIONS.find(s => s.id === id) || null;
}

/* Quick lookup: all sections under a given parent menu */
function getSectionsByParent(parentId) {
  return SECTIONS.filter(s => s.parent === parentId);
}
