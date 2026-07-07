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
        <p>Yet making that decision wasn't immediate.</p>

        <hr class="story-divider" />

        <p>Long before I could say it out loud, there was a season where I felt caught between what I had always known and what I was beginning to believe.</p>
        <p>After all of these questions and new ideas began filling my mind, my relationship with prayer slowly changed.</p>
        <p>I was no longer performing salah consistently. Sometimes I still prayed, especially when I was with my Muslim friends. In those moments, I felt as though I had to join them, even though my heart was no longer in the same place.</p>
        <p>Whenever I chose not to pray, I found myself watching others perform salah. It always stirred an internal battle within me. I felt uneasy. I felt guilty. Part of me wondered if I was committing a sin simply by not doing what I had done my whole life.</p>
        <p>The last time I prayed was at the mosque on my university campus, on 19th December 2025.</p>
        <p>I remember arriving there carrying far more questions than certainty. After making wudu, I walked upstairs, put on a mukena, and quietly sat down. I didn't begin praying. Instead, I just sat there, surrounded by people in prayer, while my mind wrestled with everything I had been studying and questioning.</p>
        <p>As I watched everyone else praying, I started to cry.</p>
        <p>For the first time, I felt like I no longer belonged there.</p>
        <p>I kept asking myself, "What am I doing here?"</p>
        <p>I remained seated for quite a while, and eventually I noticed that people around me had begun to look in my direction. So I stood up, walked to the back row, and performed what would become my final salah.</p>
        <p>Throughout the prayer, I couldn't stop crying.</p>
        <p>It wasn't because I was angry, or because I wanted to rebel.</p>
        <p>It was because, deep inside, I felt that I no longer believed I needed to do this.</p>
        <p>When I finished praying, I quietly left the mosque.</p>
        <p>I didn't realize it at the time, but that was the last salah I have ever performed.</p>
        <p>Looking back, I realize that moment was not the beginning of my journey, but it was the moment I finally acknowledged where it had already led me.</p>

        <hr class="story-divider" />

        <p>By January 2026, I already felt like I no longer belonged to Islam. But at the same time, I still had many questions about Christianity.</p>
        <p>I knew I couldn't believe something this important based only on emotion. If I was going to change what I believed, I wanted it to be because I had honestly examined it for myself.</p>
        <p>So I started digging deeper. Although Joy had introduced me to many of these topics, this time I wanted to explore everything on my own. I read books, looked into historical sources, watched lectures and debates, compared different perspectives, and kept asking difficult questions.</p>
        <p>Even after everything I had learned, part of me was still holding on.</p>
        <p>Even though I had stopped performing salah and no longer felt that I belonged to Islam, something inside me kept resisting. Letting go of a belief that had been part of my life for so many years wasn't something I could do overnight.</p>
        <p>During that season, I also began praying to Jesus.</p>
        <p>I prayed a simple prayer:</p>
        <blockquote class="story-quote">"If You really are who You say You are, please lead me. Reveal Yourself to me. Show me the truth, wherever it leads."</blockquote>

        <hr class="story-divider" />

        <p>A month later, something changed.</p>
        <p>I remember the first time I intentionally opened my heart while listening to a Christian worship song.</p>
        <p>And I just… cried.</p>
        <p>I can't fully explain what happened. It wasn't just that the music was beautiful.</p>
        <p>For the first time, I genuinely felt His presence.</p>
        <p>It felt as though Jesus had always been there, patiently waiting for me to come to Him. And this time, I finally did.</p>
        <p>That was the moment I accepted Jesus Christ as my Lord.</p>
        <p>Since then, I've tried to make prayer a natural part of my life. Before I go to sleep. Before I eat. Whenever my heart feels heavy. Or sometimes, just because I want to talk to Him.</p>
        <p>Every time I pray, I find a peace that's difficult to put into words.</p>

        <hr class="story-divider" />

        <p>Around that same time, I was also struggling with something else. My hijab.</p>
        <p>Deep down, I already knew I no longer believed I needed to wear it. But taking it off wasn't nearly as easy as I imagined.</p>
        <p>I had chosen to wear the hijab back in middle school. It wasn't something my parents forced me to do, but it was my own decision. Over the years, it had become part of who I was.</p>
        <p>So removing it felt… strange. Almost wrong.</p>
        <p>I still remember the first time I went to the mall without it. I was with my sister, but my heart was racing the whole time.</p>
        <p>I kept thinking, "What if I run into someone from campus?"</p>
        <p>I was constantly looking around, afraid someone would recognize me.</p>
        <p>But little by little, I began to make peace with that decision.</p>
        <p>For the first time in years, I felt the wind through my hair.</p>
        <p>It sounds like such a small thing. But to me, it wasn't.</p>
        <p>I felt free. Not because I wanted to reject my past. Not because I wanted attention. But because I finally believed that God sees far deeper than my appearance. He sees my heart.</p>

        <hr class="story-divider" />

        <p>Toward the end of February, Joy suggested that I attend an Easter service at a church in Malang.</p>
        <p>He wasn't in Indonesia at the time, which meant I'd be going completely on my own.</p>
        <p>Honestly, I was scared. I didn't know anyone there. Everyone would be a complete stranger.</p>
        <p>Part of me wanted to stay home. But another part of me felt like I needed to go.</p>
        <p>So I gathered all my courage and decided to attend.</p>
        <p>Beforehand, Joy had contacted the pastor and explained my situation, so they knew I was coming and that I was completely new to Christianity.</p>
        <p>The moment I arrived, people welcomed me so warmly.</p>
        <p>It was my first time attending a church service.</p>
        <p>Everything felt new. The atmosphere. The worship. The prayers. The people.</p>
        <p>And once again… I cried.</p>
        <p>At first, I was embarrassed. I kept trying to hold back my tears because I didn't want anyone to notice.</p>
        <p>But then I looked around. No one was looking at me. Everyone was completely focused on God.</p>
        <p>Some people raised their hands while worshipping. Some quietly placed a hand over their heart. Others were crying too.</p>
        <p>And in that moment, I realized something. I didn't have to worry about whether I was saying the right words or making the right movements. I could simply pray honestly.</p>
        <p>All I wanted in that moment was to worship Him.</p>
        <p>After the service, I shared my story with a few people from the church.</p>
        <p>They listened. They encouraged me. And they welcomed me with so much kindness.</p>

        <img src="assets/images/my-story-church-group.jpg" alt="With the church group after service" class="story-img" />

        <hr class="story-divider" />

        <p>After that, I joined a class about the foundations of Christianity.</p>
        <p>It helped me understand my new faith much more deeply.</p>
        <p>At the same time, I started feeling an urge to share everything I had been learning.</p>
        <p>So I went back to researching. Reading. Writing. Learning. Questioning. Then learning all over again.</p>
        <p>Putting together these notes and creating all of the slides took me about two months.</p>
        <p>The biggest reason I wanted to do all of this comes from something Jesus said to His disciples:</p>
        <blockquote class="story-quote">"Then the eleven disciples went to Galilee, to the mountain where Jesus had told them to go. When they saw him, they worshiped him; but some doubted. Then Jesus came to them and said, 'All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.'" (Matthew 28:16–20)</blockquote>
        <p>I don't claim to have all the answers. I'm still learning every day.</p>
        <p>But if sharing my story encourages even one person to seek the truth for themselves, then every hour I spent making these notes will have been worth it.</p>

        <hr class="story-divider" />

        <p>My journey with Jesus has only just begun.</p>
        <p>And if I'm honest… it hasn't always been easy.</p>
        <p>It's not easy to pray for people who dislike us. It's not easy to forgive people who have hurt us. It's not easy to deny our own desires or let go of our pride.</p>
        <p>I still fail. I still sin. I'm still learning every single day.</p>
        <p>But little by little, I can see that He's changing me. Not all at once. Not perfectly. But slowly. Patiently.</p>
        <p>And whenever I fall, His grace gives me a reason to get back up and keep following Him.</p>
        <p>One verse that reminds me of this is:</p>
        <blockquote class="story-quote">"I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me." (Galatians 2:20)</blockquote>

        <hr class="story-divider" />

        <p>Looking back now, I realize that this journey was never really about changing religions.</p>
        <p>It was about following questions that I could no longer ignore. Questions that kept me awake at night. Questions that challenged everything I had believed for years.</p>
        <p>Searching for the truth wasn't always comfortable. Sometimes it was confusing. Sometimes it was painful. And sometimes it meant letting go of things that had been part of my identity for most of my life.</p>
        <p>But looking back, I'm grateful that I kept searching. Because that search didn't just change what I believed. It changed the way I saw God. It changed the way I saw myself. And eventually, it changed the direction of my life.</p>
        <p>Today, after everything I've questioned, studied, explored, prayed about, and experienced, I can finally say this with peace:</p>
        <p>I believe that Jesus Christ is my Lord and Savior.</p>
        <p>Not because someone convinced me. Not because I was pressured into it. And not because of one emotional moment.</p>
        <p>But because I chose to ask difficult questions, to search honestly, and to follow where I sincerely believed the truth was leading me.</p>
        <p>If someone had told the younger version of me that one day I would write all of this, I honestly don't think I would have believed them.</p>
        <p>Yet here I am. And although I still have so much to learn, I have found a peace that I had been searching for all along.</p>

        <hr class="story-divider" />

        <p>I didn't write these notes to attack Islam or to disrespect anyone's beliefs.</p>
        <p>I know that faith is deeply personal, and I genuinely respect that every person has the freedom to examine the evidence and come to their own conclusions, just as I did.</p>
        <p>These notes are simply the story of my own journey.</p>
        <p>I'm not claiming to have every answer. I'm still learning. I'm still growing. And I'm sure there are many things I have yet to understand.</p>
        <p>But for the first time in a long time, I'm no longer wondering where I stand.</p>
        <p>If you happen to read this and find yourself with questions, curiosity, or even disagreement, that's completely okay.</p>
        <p>I'm always open to respectful conversations, not because I want to win an argument, but because I believe honest conversations help all of us think more deeply.</p>
        <p>At the end of the day, this was never about proving that I was right. It was about being honest with myself, following the evidence as best as I could, and seeking the truth wherever it led.</p>
        <p>Thank you for taking the time to read my story. I truly appreciate it.</p>
        <p>God bless you. 🤍</p>
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
        <p>Aku pergi ke toko fotokopi untuk mengambil pesanan kakakku. Itu hanya hari biasa — tidak ada yang istimewa, tidak ada yang direncanakan.</p>
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
        <p>Namun keputusan itu tidak datang dengan segera.</p>

        <hr class="story-divider" />

        <p>Jauh sebelum aku bisa mengucapkannya dengan lantang, ada masa di mana aku merasa terjebak di antara apa yang selama ini aku yakini dan apa yang mulai aku percayai.</p>
        <p>Setelah semua pertanyaan dan gagasan baru ini mulai memenuhi pikiranku, hubunganku dengan shalat perlahan berubah.</p>
        <p>Aku tidak lagi shalat secara konsisten. Kadang aku masih shalat, terutama ketika bersama teman-teman Muslimku. Di saat-saat itu, aku merasa harus ikut bersama mereka, meskipun hatiku sudah tidak lagi di tempat yang sama.</p>
        <p>Setiap kali aku memilih untuk tidak shalat, aku mendapati diriku memperhatikan orang lain yang sedang shalat. Itu selalu memicu pergolakan batin dalam diriku. Aku merasa gelisah. Aku merasa bersalah. Sebagian diriku bertanya-tanya apakah aku sedang berbuat dosa hanya karena tidak melakukan apa yang telah aku lakukan sepanjang hidupku.</p>
        <p>Shalat terakhirku dilakukan di masjid kampus, pada tanggal 19 Desember 2025.</p>
        <p>Aku ingat tiba di sana membawa jauh lebih banyak pertanyaan daripada kepastian. Setelah berwudu, aku naik ke atas, memakai mukena, dan duduk diam. Aku tidak mulai shalat. Aku hanya duduk di sana, dikelilingi orang-orang yang sedang shalat, sementara pikiranku bergumul dengan semua yang telah aku pelajari dan pertanyakan.</p>
        <p>Sambil melihat orang lain shalat, aku mulai menangis.</p>
        <p>Untuk pertama kalinya, aku merasa tidak lagi menjadi bagian dari tempat itu.</p>
        <p>Aku terus bertanya pada diriku sendiri, "Apa yang sedang aku lakukan di sini?"</p>
        <p>Aku tetap duduk cukup lama, sampai akhirnya aku menyadari orang-orang di sekitarku mulai melihat ke arahku. Jadi aku berdiri, berjalan ke barisan belakang, dan melakukan apa yang akan menjadi shalatku yang terakhir.</p>
        <p>Sepanjang shalat itu, aku tidak bisa berhenti menangis.</p>
        <p>Bukan karena aku marah, atau karena aku ingin memberontak.</p>
        <p>Tapi karena, jauh di dalam diriku, aku merasa aku tidak lagi percaya bahwa aku perlu melakukan ini.</p>
        <p>Setelah selesai shalat, aku diam-diam meninggalkan masjid.</p>
        <p>Aku tidak menyadarinya saat itu, tapi itulah shalat terakhir yang pernah aku lakukan.</p>
        <p>Melihat ke belakang, aku sadar momen itu bukanlah awal dari perjalananku, melainkan momen di mana aku akhirnya mengakui ke mana perjalanan itu sebenarnya telah membawaku.</p>

        <hr class="story-divider" />

        <p>Pada Januari 2026, aku sudah merasa tidak lagi menjadi bagian dari Islam. Tapi pada saat yang sama, aku masih punya banyak pertanyaan tentang Kekristenan.</p>
        <p>Aku tahu aku tidak bisa mempercayai sesuatu sepenting ini hanya berdasarkan emosi. Jika aku akan mengubah apa yang aku percayai, aku ingin itu terjadi karena aku telah benar-benar menelaahnya sendiri dengan jujur.</p>
        <p>Jadi aku mulai menggali lebih dalam. Meskipun Joy telah memperkenalkanku pada banyak topik ini, kali ini aku ingin mengeksplorasi semuanya sendiri. Aku membaca buku, menelusuri sumber-sumber sejarah, menonton ceramah dan debat, membandingkan berbagai perspektif, dan terus mengajukan pertanyaan-pertanyaan sulit.</p>
        <p>Bahkan setelah semua yang telah aku pelajari, sebagian diriku masih bertahan.</p>
        <p>Meskipun aku sudah berhenti shalat dan tidak lagi merasa menjadi bagian dari Islam, ada sesuatu dalam diriku yang terus menolak. Melepaskan keyakinan yang telah menjadi bagian hidupku selama bertahun-tahun bukanlah hal yang bisa aku lakukan dalam semalam.</p>
        <p>Di masa itu, aku juga mulai berdoa kepada Yesus.</p>
        <p>Aku berdoa dengan doa yang sederhana:</p>
        <blockquote class="story-quote">"Jika Engkau benar-benar seperti yang Engkau katakan, tolong tuntun aku. Nyatakan diri-Mu kepadaku. Tunjukkan kebenaran itu kepadaku, ke mana pun itu membawaku."</blockquote>

        <hr class="story-divider" />

        <p>Sebulan kemudian, sesuatu berubah.</p>
        <p>Aku ingat pertama kalinya aku dengan sengaja membuka hatiku sambil mendengarkan lagu penyembahan Kristen.</p>
        <p>Dan aku hanya… menangis.</p>
        <p>Aku tidak bisa sepenuhnya menjelaskan apa yang terjadi. Bukan hanya karena musiknya indah.</p>
        <p>Untuk pertama kalinya, aku benar-benar merasakan hadirat-Nya.</p>
        <p>Rasanya seperti Yesus selalu ada di sana, dengan sabar menunggu aku datang kepada-Nya. Dan kali ini, aku akhirnya datang.</p>
        <p>Itulah momen aku menerima Yesus Kristus sebagai Tuhanku.</p>
        <p>Sejak saat itu, aku berusaha menjadikan doa sebagai bagian alami dari hidupku. Sebelum aku tidur. Sebelum aku makan. Setiap kali hatiku terasa berat. Atau kadang, hanya karena aku ingin berbicara dengan-Nya.</p>
        <p>Setiap kali aku berdoa, aku menemukan kedamaian yang sulit diungkapkan dengan kata-kata.</p>

        <hr class="story-divider" />

        <p>Di masa yang sama, aku juga bergumul dengan satu hal lain. Hijabku.</p>
        <p>Jauh di dalam hati, aku sudah tahu aku tidak lagi percaya bahwa aku perlu memakainya. Tapi melepasnya ternyata tidak semudah yang aku bayangkan.</p>
        <p>Aku memilih memakai hijab sejak SMP. Itu bukan sesuatu yang dipaksakan orang tuaku, melainkan keputusanku sendiri. Selama bertahun-tahun, itu menjadi bagian dari diriku.</p>
        <p>Jadi melepasnya terasa… aneh. Hampir terasa salah.</p>
        <p>Aku masih ingat pertama kalinya aku pergi ke mal tanpa hijab. Aku bersama kakakku, tapi jantungku berdebar sepanjang waktu.</p>
        <p>Aku terus berpikir, "Bagaimana jika aku bertemu seseorang dari kampus?"</p>
        <p>Aku terus menoleh ke sekeliling, takut ada yang mengenaliku.</p>
        <p>Tapi sedikit demi sedikit, aku mulai berdamai dengan keputusan itu.</p>
        <p>Untuk pertama kalinya dalam bertahun-tahun, aku merasakan angin menerpa rambutku.</p>
        <p>Kedengarannya seperti hal yang kecil. Tapi bagiku, itu tidak kecil.</p>
        <p>Aku merasa bebas. Bukan karena aku ingin menolak masa laluku. Bukan karena aku ingin menarik perhatian. Tapi karena aku akhirnya percaya bahwa Tuhan melihat jauh lebih dalam daripada penampilanku. Dia melihat hatiku.</p>

        <hr class="story-divider" />

        <p>Menjelang akhir Februari, Joy menyarankan aku untuk menghadiri kebaktian Paskah di sebuah gereja di Malang.</p>
        <p>Saat itu dia sedang tidak berada di Indonesia, yang berarti aku akan pergi benar-benar sendirian.</p>
        <p>Jujur, aku takut. Aku tidak mengenal siapa pun di sana. Semua orang akan menjadi orang asing sepenuhnya.</p>
        <p>Sebagian diriku ingin tetap di rumah. Tapi sebagian lain merasa aku perlu pergi.</p>
        <p>Jadi aku mengumpulkan segala keberanianku dan memutuskan untuk pergi.</p>
        <p>Sebelumnya, Joy telah menghubungi pendeta dan menjelaskan situasiku, jadi mereka tahu aku akan datang dan bahwa aku benar-benar baru mengenal Kekristenan.</p>
        <p>Begitu aku tiba, orang-orang menyambutku dengan sangat hangat.</p>
        <p>Itu adalah pertama kalinya aku menghadiri kebaktian gereja.</p>
        <p>Semuanya terasa baru. Suasananya. Pujian penyembahannya. Doa-doanya. Orang-orangnya.</p>
        <p>Dan sekali lagi… aku menangis.</p>
        <p>Awalnya, aku merasa malu. Aku terus berusaha menahan air mataku karena tidak ingin ada yang menyadarinya.</p>
        <p>Tapi kemudian aku melihat sekeliling. Tidak ada yang memperhatikanku. Semua orang benar-benar fokus kepada Tuhan.</p>
        <p>Beberapa orang mengangkat tangan mereka saat menyembah. Beberapa dengan tenang meletakkan tangan di dada mereka. Yang lain juga menangis.</p>
        <p>Dan di momen itu, aku menyadari sesuatu. Aku tidak perlu khawatir apakah aku mengucapkan kata-kata yang benar atau melakukan gerakan yang benar. Aku bisa berdoa dengan jujur apa adanya.</p>
        <p>Yang aku inginkan di momen itu hanyalah menyembah Dia.</p>
        <p>Setelah kebaktian, aku menceritakan kisahku kepada beberapa orang dari gereja itu.</p>
        <p>Mereka mendengarkan. Mereka menguatkanku. Dan mereka menyambutku dengan begitu banyak kebaikan.</p>

        <img src="assets/images/my-story-church-group.jpg" alt="Bersama teman-teman gereja setelah kebaktian" class="story-img" />

        <hr class="story-divider" />

        <p>Setelah itu, aku mengikuti kelas dasar-dasar Kekristenan.</p>
        <p>Kelas itu membantuku memahami imanku yang baru jauh lebih dalam.</p>
        <p>Pada saat yang sama, aku mulai merasa terdorong untuk membagikan semua yang telah aku pelajari.</p>
        <p>Jadi aku kembali meneliti. Membaca. Menulis. Belajar. Bertanya. Lalu belajar lagi dari awal.</p>
        <p>Menyusun catatan ini dan membuat semua slide-nya memakan waktu sekitar dua bulan.</p>
        <p>Alasan terbesarku melakukan semua ini datang dari sesuatu yang Yesus katakan kepada murid-murid-Nya:</p>
        <blockquote class="story-quote">"Dan ketika kesebelas murid itu melihat Dia, mereka menyembah-Nya, tetapi beberapa orang ragu-ragu. Yesus mendekati mereka dan berkata: 'Kepada-Ku telah diberikan segala kuasa di sorga dan di bumi. Karena itu pergilah, jadikanlah semua bangsa murid-Ku dan baptislah mereka dalam nama Bapa dan Anak dan Roh Kudus, dan ajarlah mereka melakukan segala sesuatu yang telah Kuperintahkan kepadamu. Dan ketahuilah, Aku menyertai kamu senantiasa sampai kepada akhir zaman.'" (Matius 28:16–20)</blockquote>
        <p>Aku tidak mengklaim memiliki semua jawaban. Aku masih belajar setiap hari.</p>
        <p>Tapi jika membagikan kisahku bisa mendorong walau hanya satu orang untuk mencari kebenaran bagi diri mereka sendiri, maka setiap jam yang aku habiskan membuat catatan ini akan sepadan.</p>

        <hr class="story-divider" />

        <p>Perjalananku bersama Yesus baru saja dimulai.</p>
        <p>Dan jujur saja… ini tidak selalu mudah.</p>
        <p>Tidak mudah mendoakan orang-orang yang tidak menyukai kita. Tidak mudah mengampuni orang-orang yang telah menyakiti kita. Tidak mudah menyangkal keinginan diri sendiri atau melepaskan kesombongan.</p>
        <p>Aku masih gagal. Aku masih berbuat dosa. Aku masih belajar setiap hari.</p>
        <p>Tapi sedikit demi sedikit, aku bisa melihat bahwa Dia sedang mengubahku. Tidak sekaligus. Tidak sempurna. Tapi perlahan. Dengan sabar.</p>
        <p>Dan setiap kali aku jatuh, kasih karunia-Nya memberiku alasan untuk bangkit kembali dan terus mengikuti-Nya.</p>
        <p>Satu ayat yang selalu mengingatkanku akan hal ini adalah:</p>
        <blockquote class="story-quote">"Namun aku hidup, tetapi bukan lagi aku sendiri yang hidup, melainkan Kristus yang hidup di dalam aku. Dan hidupku yang kuhidupi sekarang di dalam daging, adalah hidup oleh iman dalam Anak Allah yang telah mengasihi aku dan menyerahkan diri-Nya untuk aku." (Galatia 2:20)</blockquote>

        <hr class="story-divider" />

        <p>Melihat ke belakang sekarang, aku sadar perjalanan ini sebenarnya tidak pernah benar-benar tentang berpindah agama.</p>
        <p>Ini tentang mengikuti pertanyaan-pertanyaan yang tidak bisa lagi aku abaikan. Pertanyaan-pertanyaan yang membuatku terjaga di malam hari. Pertanyaan-pertanyaan yang menantang semua yang telah aku percayai selama bertahun-tahun.</p>
        <p>Mencari kebenaran tidak selalu nyaman. Kadang membingungkan. Kadang menyakitkan. Dan kadang berarti melepaskan hal-hal yang telah menjadi bagian dari identitasku selama sebagian besar hidupku.</p>
        <p>Tapi melihat ke belakang, aku bersyukur aku terus mencari. Karena pencarian itu tidak hanya mengubah apa yang aku percayai. Itu mengubah cara aku memandang Tuhan. Itu mengubah cara aku memandang diriku sendiri. Dan pada akhirnya, itu mengubah arah hidupku.</p>
        <p>Hari ini, setelah semua yang aku pertanyakan, pelajari, jelajahi, doakan, dan alami, aku akhirnya bisa mengatakan ini dengan damai:</p>
        <p>Aku percaya bahwa Yesus Kristus adalah Tuhan dan Juruselamatku.</p>
        <p>Bukan karena seseorang meyakinkanku. Bukan karena aku ditekan. Dan bukan karena satu momen emosional.</p>
        <p>Tapi karena aku memilih untuk bertanya dengan sungguh-sungguh, mencari dengan jujur, dan mengikuti ke mana aku sungguh-sungguh percaya kebenaran itu membawaku.</p>
        <p>Jika seseorang memberitahu diriku yang lebih muda bahwa suatu hari aku akan menulis semua ini, jujur aku rasa aku tidak akan percaya.</p>
        <p>Namun di sinilah aku. Dan meskipun aku masih punya banyak hal untuk dipelajari, aku telah menemukan kedamaian yang selama ini aku cari.</p>

        <hr class="story-divider" />

        <p>Aku menulis catatan ini bukan untuk menyerang Islam atau untuk tidak menghormati keyakinan siapa pun.</p>
        <p>Aku tahu bahwa iman adalah sesuatu yang sangat personal, dan aku sungguh-sungguh menghormati bahwa setiap orang punya kebebasan untuk menelaah bukti-bukti dan sampai pada kesimpulan mereka sendiri, sama seperti yang aku lakukan.</p>
        <p>Catatan ini hanyalah kisah dari perjalananku sendiri.</p>
        <p>Aku tidak mengklaim memiliki semua jawaban. Aku masih belajar. Aku masih bertumbuh. Dan aku yakin masih banyak hal yang belum aku pahami.</p>
        <p>Tapi untuk pertama kalinya dalam waktu yang lama, aku tidak lagi bertanya-tanya di mana aku berdiri.</p>
        <p>Jika kamu membaca ini dan menemukan dirimu punya pertanyaan, rasa ingin tahu, atau bahkan ketidaksetujuan, itu sepenuhnya tidak apa-apa.</p>
        <p>Aku selalu terbuka untuk percakapan yang penuh hormat, bukan karena aku ingin memenangkan argumen, tapi karena aku percaya percakapan yang jujur membantu kita semua berpikir lebih dalam.</p>
        <p>Pada akhirnya, ini bukan tentang membuktikan bahwa aku benar. Ini tentang jujur pada diriku sendiri, mengikuti bukti sebaik yang aku bisa, dan mencari kebenaran ke mana pun itu membawaku.</p>
        <p>Terima kasih telah meluangkan waktu untuk membaca kisahku. Aku sungguh menghargainya.</p>
        <p>Tuhan memberkati kamu. 🤍</p>
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
