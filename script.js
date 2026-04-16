:root{
    --bg:#f5f7fb;
    --bg-secondary:#ffffff;
    --text:#1e293b;
    --subtext:#64748b;
    --accent:#6366f1;
    --accent2:#8b5cf6;
    --card:#ffffff;
}

body.dark{
    --bg:#0f172a;
    --bg-secondary:#1e293b;
    --text:#f8fafc;
    --subtext:#94a3b8;
    --accent:#38bdf8;
    --accent2:#818cf8;
    --card:#1e293b;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
    transition:background .3s,color .3s;
}

body{
    background:var(--bg);
    color:var(--text);
}

/* NAVBAR */
.navbar{
    position:fixed;
    top:20px;
    left:50%;
    transform:translateX(-50%);
    width:90%;
    max-width:1200px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px 30px;
    background:rgba(15,23,42,0.55);
    backdrop-filter:blur(18px);
    border-radius:20px;
    border:1px solid rgba(255,255,255,0.15);
    z-index:1000;
    box-shadow:0 8px 30px rgba(0,0,0,0.15);
}

body.dark .navbar{
    background:rgba(15,23,42,0.8);
}

.logo{
    font-size:1.6rem;
    font-weight:700;
    background:linear-gradient(90deg,var(--accent),var(--accent2));
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}

nav{
    display:flex;
    align-items:center;
    gap:25px;
    margin-left:auto;
}

.navbar nav a{
    text-decoration:none;
    color:rgba(255,255,255,0.88) !important;
    font-weight:600;
    font-size:1rem;
    transition:0.3s ease;
}

.navbar nav a:hover{
    color:#ffffff !important;
    text-shadow:0 0 10px rgba(255,255,255,0.35);
}

#theme-toggle{
    border:none;
    background:var(--card);
    padding:10px 14px;
    border-radius:10px;
    cursor:pointer;
    font-size:18px;
}

/* HERO */
.hero{
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding:40px;
    background:
        linear-gradient(
            rgba(5,10,25,0.78),
            rgba(5,10,25,0.78)
        ),
        url('hero-bg.jpg');
    background-size:cover;
    background-position:center;
}

.hero h1{
    font-size:3.2rem;
    margin-bottom:20px;
    color:white;
    text-shadow:0 4px 20px rgba(0,0,0,0.35);
}

.hero p{
    font-size:1.2rem;
    color:#d1d5db;
    margin-bottom:30px;
}

.btn{
    padding:14px 28px;
    border-radius:12px;
    text-decoration:none;
    font-weight:600;
    display:inline-block;
    margin:8px;
}

.primary{
    background:linear-gradient(135deg,var(--accent),var(--accent2));
    color:white;
}

.secondary{
    background:#25D366;
    color:white;
}

/* CARDS */
.stat-card,.service-card{
    background:var(--card);
    padding:25px;
    border-radius:18px;
    box-shadow:0 8px 25px rgba(0,0,0,0.08);
}

.stats,.service-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
    padding:40px 8%;
}

/* SECTION */
.services,.about,.contact{
    padding:80px 8%;
    text-align:center;
}

.services h2,.about h2,.contact h2{
    margin-bottom:30px;
    font-size:2.3rem;
    color:var(--accent);
}

/* FLOATING WHATSAPP */
.floating-whatsapp{
    position:fixed;
    bottom:25px;
    right:25px;
    background:#25D366;
    padding:15px 18px;
    border-radius:50%;
    text-decoration:none;
    font-size:22px;
    color:white;
}
.reveal{
    opacity:0;
    transform:translateY(40px);
    transition:all 0.8s ease;
}

.reveal.active{
    opacity:1;
    transform:translateY(0);
}
.gallery{
    padding:80px 8%;
    text-align:center;
}

.gallery-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
    margin-top:30px;
}

.gallery-grid img{
    width:100%;
    border-radius:18px;
    height:250px;
    object-fit:cover;
    transition:.3s;
}

.gallery-grid img:hover{
    transform:scale(1.05);
}
.reviews{
    padding:80px 8%;
    text-align:center;
}

.review-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:20px;
    margin-top:30px;
}

.review-card{
    background:var(--card);
    padding:30px;
    border-radius:18px;
    box-shadow:0 8px 25px rgba(0,0,0,0.08);
    transition:0.3s;
}

.review-card:hover{
    transform:translateY(-8px);
}

.review-card p{
    margin:15px 0;
    color:var(--subtext);
}

.review-buttons{
    display:flex;
    justify-content:center;
    gap:15px;
    flex-wrap:wrap;
    margin-top:25px;
}

@media (max-width: 768px){

    /* NAVBAR */
    .navbar nav a{
        text-decoration:none;
        color:rgba(255,255,255,0.88) !important;
        font-weight:600;
        font-size:1rem;
        transition:all 0.3s ease;
        position:relative;
        padding:6px 10px;
        border-radius:8px;
    }

    nav{
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    nav a{
        font-size: 0.9rem;
    }

    /* HERO */
    .hero{
        padding: 120px 20px 60px;
        min-height: auto;
    }

    .hero h1{
        font-size: 2rem;
        line-height: 1.3;
    }

    .hero p{
        font-size: 1rem;
    }

    .hero-buttons{
        flex-direction: column;
        align-items: center;
    }

    /* STATS */
    .stats{
        grid-template-columns: 1fr;
    }

    /* SERVICES */
    .service-grid{
        grid-template-columns: 1fr;
    }

    /* GALLERY */
    .gallery-grid{
        grid-template-columns: 1fr;
    }

    /* REVIEWS */
    .review-grid{
        grid-template-columns: 1fr;
    }

    /* SECTION PADDING */
    .services,
    .about,
    .contact,
    .gallery,
    .reviews{
        padding: 60px 20px;
    }

    /* BUTTONS */
    .btn{
        width: 100%;
        max-width: 280px;
        text-align: center;
    }
}
