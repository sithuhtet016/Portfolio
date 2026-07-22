import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // send via fetch to ensure the data is posted before clearing inputs
    try {
      const res = await fetch("https://formsubmit.co/sithuhtet016@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _captcha: "false",
        }).toString(),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      alert("MESSAGE SENT! I WILL RESPOND SOON_");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Form submit error:", err);
      alert("FAILED TO SEND MESSAGE. PLEASE TRY AGAIN.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "@",
      label: "EMAIL",
      value: "sithuhtet016@gmail.com",
    },
    {
      icon: "☎",
      label: "PHONE",
      value: "+971556562726",
    },
    {
      icon: "▲",
      label: "LOCATION",
      value: "ABU DHABI, UAE",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(168, 90, 40, 0.85) 100%)",
      }}
    >
      {/* Retro stars */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1"
            style={{
              background:
                i % 3 === 0
                  ? "rgb(var(--color-primary))"
                  : i % 3 === 1
                    ? "rgb(var(--color-secondary))"
                    : "rgb(var(--color-accent))",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 3 === 0 ? "rgb(var(--color-primary))" : i % 3 === 1 ? "rgb(var(--color-secondary))" : "rgb(var(--color-accent))"}`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-block mb-6 px-4 py-2 pixel-corners"
            style={{
              border: "2px solid rgb(var(--color-primary))",
              background: "rgb(var(--color-accent))",
              color: "rgb(0, 0, 0)",
              fontSize: "1.25rem",
              fontFamily: "'VT323', monospace",
            }}
          >
            &gt;&gt; CONTACT.EXE
          </div>
          <h2 style={{ color: "rgb(var(--color-primary))" }}>LET'S CONNECT</h2>
          <p className="mt-6 max-w-2xl mx-auto" style={{ fontSize: "1.5rem" }}>
            &gt; READY TO BUILD SOMETHING AMAZING?
            <br />
            &gt; SEND ME A MESSAGE_
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3
              className="mb-8"
              style={{ color: "rgb(var(--color-secondary))" }}
            >
              [ INFO ]
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pixel-corners p-4"
                  style={{
                    background: "rgba(168, 90, 40, 0.16)",
                    border: "3px solid rgb(var(--color-brick))",
                    boxShadow: "0 0 0 3px rgb(0, 0, 0)",
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center shrink-0 pixel-corners"
                    style={{
                      background: "rgb(var(--color-accent))",
                      color: "rgb(0, 0, 0)",
                      fontSize: "1.5rem",
                      fontFamily: "'VT323', monospace",
                      boxShadow: "0 0 0 3px rgb(0, 0, 0)",
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div
                      className="mb-1"
                      style={{
                        fontSize: "1rem",
                        fontFamily: "'VT323', monospace",
                        color: "rgb(var(--color-accent))",
                      }}
                    >
                      {info.label}
                    </div>
                    <div
                      style={{
                        fontSize: "1.25rem",
                        fontFamily: "'VT323', monospace",
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative terminal */}
            <div
              className="mt-8 pixel-corners p-4"
              style={{
                background: "rgba(0, 0, 0, 0.8)",
                border: "3px solid rgb(var(--color-secondary))",
                boxShadow: "0 0 0 3px rgb(0, 0, 0)",
              }}
            >
              <div
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "1.25rem",
                  color: "rgb(var(--color-secondary))",
                }}
              >
                <div>&gt; status: ONLINE</div>
                <div>&gt; response_time: 24h</div>
                <div className="flex items-center gap-2">
                  <div>&gt;</div>
                  <div
                    className="w-3 h-5 blink"
                    style={{ background: "rgb(var(--color-secondary))" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-8" style={{ color: "rgb(var(--color-primary))" }}>
              [ MESSAGE ]
            </h3>

            <form
              action="https://formsubmit.co/sithuhtet016@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2"
                  style={{
                    fontSize: "1.25rem",
                    fontFamily: "'VT323', monospace",
                    color: "rgb(var(--color-accent))",
                  }}
                >
                  &gt; NAME:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pixel-corners outline-none"
                  style={{
                    border: "3px solid rgb(var(--color-primary))",
                    background: "rgba(0, 0, 0, 0.72)",
                    color: "rgb(var(--color-text))",
                    fontSize: "1.25rem",
                    fontFamily: "'VT323', monospace",
                    boxShadow: "0 0 0 3px rgb(0, 0, 0)",
                  }}
                  placeholder="ENTER_NAME"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2"
                  style={{
                    fontSize: "1.25rem",
                    fontFamily: "'VT323', monospace",
                    color: "rgb(var(--color-accent))",
                  }}
                >
                  &gt; EMAIL:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pixel-corners outline-none"
                  style={{
                    border: "3px solid rgb(var(--color-secondary))",
                    background: "rgba(0, 0, 0, 0.72)",
                    color: "rgb(var(--color-text))",
                    fontSize: "1.25rem",
                    fontFamily: "'VT323', monospace",
                    boxShadow: "0 0 0 3px rgb(0, 0, 0)",
                  }}
                  placeholder="YOUR@EMAIL.COM"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2"
                  style={{
                    fontSize: "1.25rem",
                    fontFamily: "'VT323', monospace",
                    color: "rgb(var(--color-accent))",
                  }}
                >
                  &gt; MESSAGE:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 pixel-corners outline-none resize-none"
                  style={{
                    border: "3px solid rgb(var(--color-accent))",
                    background: "rgba(0, 0, 0, 0.72)",
                    color: "rgb(var(--color-text))",
                    fontSize: "1.25rem",
                    fontFamily: "'VT323', monospace",
                    boxShadow: "0 0 0 3px rgb(0, 0, 0)",
                  }}
                  placeholder="TYPE_YOUR_MESSAGE_HERE"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 pixel-corners transition-all hover:scale-105"
                style={{
                  background: "rgb(var(--color-primary))",
                  color: "rgb(0, 0, 0)",
                  border: "4px solid rgb(var(--color-primary))",
                  boxShadow: "0 0 0 4px rgb(0, 0, 0)",
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: "0.75rem",
                }}
              >
                [ SEND_MSG ]
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
