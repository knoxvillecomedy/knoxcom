import { MessageSquareText } from "lucide-react"

export function SmsSignup() {
  return (
    <div className="bg-card text-card-foreground rounded-2xl shadow-xl border border-border p-6 md:p-8 mx-auto text-left">
      <div className="flex items-center gap-3 mb-2">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
          <MessageSquareText className="w-5 h-5" />
        </span>
        <h2 className="font-display text-2xl font-bold text-foreground leading-tight">
          Get on the list
        </h2>
      </div>
      <p className="text-muted-foreground text-sm mb-6 text-pretty">
        Be the first to hear about upcoming Knoxville Comedy shows, events, and the next Hoot. Sign up for text
        updates below.
      </p>

      <div id="sms-signup-embed">
        <iframe
          src="https://formstax.co/2669ca17"
          style={{ height: "800px", width: "100%", border: "none" }}
          title="Text to Consent Form"
        />
      </div>

      <p className="text-[11px] leading-relaxed text-muted-foreground mt-4">
        By signing up you agree to receive recurring automated marketing text messages. Message &amp; data rates may
        apply. Reply STOP to unsubscribe.
      </p>
    </div>
  )
}
