import { useEffect, useRef } from "react";
import "./ProblemSection.css";
import logoMarkLg from "../../assets/problem/logo-mark-lg.png";
import logoMarkSm from "../../assets/problem/logo-mark-sm.png";
import nairaCount from "../../assets/problem/naira-count.jpg";
import memberPhone from "../../assets/problem/member-phone.jpg";

const STEPS = [
  ["Fri · 6:10 PM", "Group chat", "Claims with screenshots nobody can verify."],
  ["Fri · 7:08 PM", "Bank alerts", "They name a sender, never a member or a due."],
  ["Sat · 10:05 AM", "Reconciling by hand", "Alerts, notes and screenshots compared one by one."],
  ["Sat · 11:42 PM", "Spreadsheet", "Typed in late. The totals still don't match the bank."],
  ["Sun · 8:30 PM", "A member asks", "Where is the money going? No statement to check."],
];

export default function ProblemSection() {
  const rootRef = useRef(null);
  const restartRef = useRef(() => {});

  useEffect(() => {
    const $ = (id) => document.getElementById(id);
    const root = rootRef.current;
    let R = 0;
    let observer;
    let cur;

    const rows = [
      ["Okafor C.", 25, 25, 0],
      ["Eze N.", 25, 10, 25],
      ["Bello T.", 25, 25, 0],
      ["Adeyemi K.", 0, 25, 25],
      ["Nwosu E.", 20, 25, 25],
    ];
    const L = "ABCDEFG";

    function build() {
      let h =
        '<tr><th class="rh"></th>' +
        L.split("")
          .map((c) => "<th>" + c + "</th>")
          .join("") +
        "</tr>";
      for (let r = 1; r <= 13; r++) {
        h += '<tr><th class="rh">' + r + "</th>";
        for (let c = 0; c < 7; c++) {
          const d = r >= 4 && r <= 10 && c < 6 ? " d" : "";
          const x = r == 4 && c < 6 ? " hd" : "";
          h +=
            '<td id="' + L[c] + r + '" class="' + (d + x).trim() + (c > 1 ? " r" : "") + '"></td>';
        }
        h += "</tr>";
      }
      $("tb").innerHTML = h;
      const cg =
        '<colgroup><col style="width:30px"><col style="width:34px"><col style="width:120px"><col span=3 style="width:78px"><col style="width:96px"><col></colgroup>';
      $("tb").insertAdjacentHTML("afterbegin", cg);
    }

    function cell(id, v, f, cls) {
      if (cur) cur.classList.remove("sel");
      cur = $(id);
      cur.classList.add("sel");
      $("nb").textContent = id;
      $("fx").textContent = f || v || "";
      if (v !== undefined && v !== "") cur.textContent = v;
      if (cls) cur.classList.add(cls);
    }

    const S = [
      async function (z) {
        const ch = $("chat");
        ch.innerHTML = '<div class="day">FRIDAY</div>';
        const SHOT =
          '<div class="shot"><div class="si"><div class="rcd"><i class="av"></i><div class="to">To IKEJA TRADERS CLUB</div><div class="am">₦25,000.00</div><div class="ok"><i>✓</i>Successful</div><div class="gx"><div class="gt"><span><i>✓</i>Credited in seconds</span><em>?</em></div><div class="tl"><div><i>✓</i>Payment<br>Submitted<small>09-25 6:09:41 PM</small></div><span class="ln"></span><div><i>✓</i>Debit<br>Successful<small>09-25 6:09:42 PM</small></div><span class="ln"></span><div><i>✓</i>Money<br>Credited<small>09-25 6:09:42 PM</small></div></div></div><div class="r">Transfer Amount<b>₦25,000.00</b></div><div class="r">Fee<b>₦0.00</b></div><div class="r">Payment Amount<b>₦25,000.00</b></div></div><div class="rcd rc2">Recipient<div>IKEJA TRADERS CLUB<small>CityBank | 0123456789</small></div></div></div></div>';
        function add(c, u, col, t, time, rc, tk) {
          ch.insertAdjacentHTML(
            "beforeend",
            '<div class="wb ' +
              c +
              (rc ? " img" : "") +
              '">' +
              (u ? '<u style="color:' + col + '">' + u + "</u>" : "") +
              (rc
                ? SHOT + '<div class="cp">' + t + "<s>" + time + "</s></div>"
                : t + "<s>" + time + (tk ? "<i>✓✓</i>" : "") + "</s>") +
              "</div>",
          );
        }
        await z(900);
        add("in", "Chidi, 4B", "#c0392b", "Dues paid ✅", "6:10 PM", 1);
        await z(1700);
        add("in", "Ngozi", "#1b7f5c", "Sent mine this morning o", "6:14 PM");
        await z(1700);
        add("in", "Tunde", "#a05a00", "I sent 25k. Abeg confirm 🙏", "6:21 PM");
        await z(1500);
        $("sub").textContent = "typing…";
        await z(1700);
        $("sub").textContent = "48 participants";
        add("out", "", "", "Which account? The alert has no names 😩", "6:31 PM", 0, 1);
        await z(2200);
      },
      async function (z) {
        const s = $("sms");
        s.innerHTML = '<div class="sd">Today</div>';
        $("p1").classList.remove("show");
        const A = [
          ["25,000.00", "C OKAFOR/MAR", "6:48 PM", "1,284,512.40"],
          ["25,000.00", "NIP/MOB/0813****/DUES", "6:52 PM", "1,309,512.40"],
          ["20,000.00", "E NWOSU", "7:05 PM", "1,329,512.40"],
        ];
        for (let i = 0; i < 3; i++) {
          await z(1000);
          s.insertAdjacentHTML(
            "beforeend",
            '<div class="sm">Credit Alert!<br>Acc#: ******548<br>Amt: ' +
              A[i][0] +
              "<br>Desc: TRF FROM " +
              A[i][1] +
              "<br>Avail Bal: " +
              A[i][3] +
              "<span>" +
              A[i][2] +
              " · SIM 1</span></div>",
          );
        }
        await z(1200);
        $("p1").classList.add("show");
        await z(2600);
      },
      async function (z) {
        const p = $("pc");
        p.classList.remove("z");
        $("b3").classList.remove("show");
        void p.offsetWidth;
        p.classList.add("z");
        await z(1400);
        $("b3").classList.add("show");
        await z(3400);
      },
      async function (z) {
        build();
        cur = null;
        let t = 0;
        ["No", "Name", "Jan", "Feb", "Mar", "Total"].forEach(function (h, k) {
          $("ABCDEF"[k] + "4").textContent = h;
        });
        await z(700);
        for (let i = 0; i < 5; i++) {
          const r = 5 + i;
          const d = rows[i];
          cell("A" + r, i + 1);
          await z(130);
          cell("B" + r, d[0]);
          await z(130);
          for (let j = 1; j <= 3; j++) {
            const v = d[j] ? d[j] + ",000" : "";
            cell("CDE"[j - 1] + r, v);
            await z(d[j] ? 150 : 90);
          }
          t += d[1] + d[2] + d[3];
          cell("F" + r, d[1] + d[2] + d[3] + ",000", "=SUM(C" + r + ":E" + r + ")");
          await z(170);
        }
        cell("B10", "Total");
        $("B10").classList.add("b");
        cell("F10", "280,000", "=SUM(F5:F9)", "b");
        await z(500);
        cell("B12", "Bank statement");
        cell("F12", "275,000");
        await z(500);
        cell("B13", "Difference", "=F10-F12");
        cell("F13", "-5,000", "=F10-F12", "bad");
        $("B13").classList.add("bad");
        await z(2400);
      },
      async function (z) {
        const q = $("q");
        const b = $("b5");
        const p = $("pm");
        q.textContent = "";
        b.classList.remove("show");
        p.classList.remove("z");
        void p.offsetWidth;
        p.classList.add("z");
        await z(1400);
        b.classList.add("show");
        await z(500);
        const m = "Did mine reflect?";
        for (let i = 1; i <= m.length; i++) {
          q.textContent = m.slice(0, i);
          await z(90);
        }
        await z(2200);
      },
    ];

    async function play(i) {
      const r = ++R;
      const z = (ms) =>
        new Promise((o) => setTimeout(o, ms)).then(() => {
          if (r !== R) throw 0;
        });
      const LI = Array.from(root.querySelectorAll("#ls li"));
      try {
        $("vd").classList.remove("on");
        for (; i < S.length; i++) {
          LI.forEach(function (l, k) {
            l.classList.toggle("active", k === i);
            l.classList.toggle("done", k < i);
          });
          root.querySelectorAll(".scene").forEach(function (s, k) {
            s.classList.toggle("on", k === i);
          });
          await S[i](z);
          if (i < S.length - 1) await z(500);
        }
        LI.forEach(function (l) {
          l.classList.add("done");
        });
        $("vd").classList.add("on");
        await z(5000);
        play(0);
      } catch (e) {
        /* stopped (replay clicked, step jumped, or component unmounted) */
      }
    }

    function fit() {
      const k = Math.min(1, ($("s3").clientWidth - 20) / 724);
      $("mw").style.transform = "scale(" + k + ")";
    }

    fit();
    window.addEventListener("resize", fit);
    restartRef.current = (i = 0) => play(i);

    let done = 0;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        function (es, o) {
          if (es[0].isIntersecting && !done) {
            done = 1;
            play(0);
            o.disconnect();
          }
        },
        { threshold: 0.3 },
      );
      observer.observe($("pl"));
    } else {
      play(0);
    }

    return () => {
      R++;
      if (observer) observer.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <section className="gps" ref={rootRef}>
      <div className="wrap">
        <header className="head">
          <div>
            <div className="eyebrow">The problem</div>
            <h2>Still spending weekends chasing payments?</h2>
          </div>
          <p className="lede">
            Without centralized visibility, time is wasted and trust begins to weaken.
          </p>
        </header>
        <div className="top">
          <h3>One ₦25,000 dues payment, followed from Friday to Sunday</h3>
          <div className="ctl">
            <span>Sample data</span>
            <button id="rp" type="button" onClick={() => restartRef.current(0)}>
              ↻ Replay
            </button>
          </div>
        </div>
        <div className="player" id="pl">
          <ol className="list" id="ls">
            {STEPS.map((s, i) => (
              <li key={i} onClick={() => restartRef.current(i)}>
                <span className="n">
                  <b>{i + 1}</b>
                </span>
                <div className="t">{s[0]}</div>
                <h4>{s[1]}</h4>
                <p>{s[2]}</p>
              </li>
            ))}
          </ol>
          <div className="stage">
            <img
              className="lg"
              alt=""
              aria-hidden="true"
              style={{ right: -30, top: -10, width: 520, "--r": "0deg" }}
              src={logoMarkLg}
            />
            <img
              className="lg"
              alt=""
              aria-hidden="true"
              style={{ left: 0, bottom: 30, width: 150, "--r": "0deg", animationDelay: "-6s" }}
              src={logoMarkSm}
            />
            <div className="scene" id="s0">
              <div className="phone">
                <div className="scr">
                  <div className="sb" style={{ background: "#008069" }}>
                    <span>6:31</span>
                    <span>▂▄▆ 5G ▮</span>
                  </div>
                  <div className="wh">
                    <span>←</span>
                    <span className="av"></span>
                    <div>
                      <b>Ikeja Traders Club</b>
                      <small id="sub">48 participants</small>
                    </div>
                    <i>⋮</i>
                  </div>
                  <div className="chat" id="chat"></div>
                  <div className="inp">
                    <div className="ib">
                      <svg
                        viewBox="0 0 24 24"
                        width="17"
                        height="17"
                        fill="none"
                        stroke="#8696a0"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M8.5 14c1 1.6 2.2 2.3 3.5 2.3s2.5-.7 3.5-2.3" />
                        <circle cx="9" cy="10" r=".6" fill="#8696a0" />
                        <circle cx="15" cy="10" r=".6" fill="#8696a0" />
                      </svg>
                      <span>Message</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="17"
                        height="17"
                        fill="none"
                        stroke="#8696a0"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 11.5l-7.6 7.6a5 5 0 01-7-7l8-8a3.3 3.3 0 014.7 4.7l-8 8a1.7 1.7 0 01-2.4-2.4l7.2-7.2" />
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        width="17"
                        height="17"
                        fill="none"
                        stroke="#8696a0"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      >
                        <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
                        <circle cx="12" cy="13" r="3.2" />
                      </svg>
                    </div>
                    <i>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
                        <path d="M12 15a3 3 0 003-3V6a3 3 0 00-6 0v6a3 3 0 003 3zm5-3a5 5 0 01-10 0H5a7 7 0 006 6.92V22h2v-3.08A7 7 0 0019 12h-2z" />
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="scene" id="s1">
              <div className="row">
                <div className="phone">
                  <div className="scr">
                    <div className="sb" style={{ background: "#fff", color: "#202124" }}>
                      <span>7:08</span>
                      <span>▂▄▆ 5G ▮</span>
                    </div>
                    <div className="sh">
                      <span className="sb2">←</span>
                      <span className="av"></span>
                      <b>CITYBANK</b>
                      <i>⋮</i>
                    </div>
                    <div className="sms" id="sms"></div>
                    <div className="sin">
                      <div>Text message</div>
                    </div>
                  </div>
                </div>
                <div className="note" id="p1">
                  <i></i>
                  <span>Who is C Okafor? Which member? Which due?</span>
                </div>
              </div>
            </div>
            <div className="scene" id="s2">
              <div className="pic" id="pc">
                <img
                  src={nairaCount}
                  alt="A man in a market counting a thick bundle of worn naira notes by hand"
                />
                <div className="cap" id="b3">
                  <small>Sat · 10:05 AM</small>
                  <em>Alerts, notes and screenshots, one by one…</em>
                </div>
              </div>
            </div>
            <div className="scene" id="s3">
              <div className="mw" id="mw">
                <div className="lid">
                  <div className="ms">
                    <div className="xt">
                      <span className="tf">
                        <i style={{ background: "#ff5f57" }}></i>
                        <i style={{ background: "#febc2e" }}></i>
                        <i style={{ background: "#28c840" }}></i>
                      </span>
                      <span className="tt">dues_march_FINAL_v3.xlsx</span>
                      <span></span>
                    </div>
                    <div className="xr">
                      <b>Home</b>
                      <span>Insert</span>
                      <span>Draw</span>
                      <span>Page Layout</span>
                      <span>Formulas</span>
                      <span>Data</span>
                      <span>Review</span>
                      <span>View</span>
                    </div>
                    <div className="xf">
                      <div id="nb">A1</div>
                      <div id="fx"></div>
                    </div>
                    <div className="xg">
                      <table id="tb"></table>
                    </div>
                    <div className="xs">
                      <span className="a">Sheet1</span>
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                    </div>
                  </div>
                </div>
                <div className="base"></div>
              </div>
            </div>
            <div className="scene" id="s4">
              <div className="pic" id="pm">
                <img
                  src={memberPhone}
                  alt="A member looking away from a table while holding his phone"
                />
                <div className="cap type" id="b5">
                  <small>Member · Chidi, 4B</small>
                  <em id="q"></em>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="verdict" id="vd">
          <b>Five places hold one payment.</b> <span>None of them is the record.</span>
        </div>
        <div className="cols">
          <div className="col">
            <div className="tag">Time</div>
            <h4>How much time is your team losing to manual reconciliation?</h4>
            <p>Bank alerts and spreadsheets consume hours every month.</p>
          </div>
          <div className="col">
            <div className="tag">Trust</div>
            <h4>Can your members clearly see how funds are managed?</h4>
            <p>Limited transparency reduces trust and slows compliance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
