export function ContactForm() {
  return (
    <form className="contact-form" name="grassar-contact" method="POST" action="/thank-you" data-netlify="true" data-netlify-honeypot="company-website">
      <input type="hidden" name="form-name" value="grassar-contact" />
      <p className="hidden-field"><label>Do not fill this out: <input name="company-website" /></label></p>
      <div className="field-row">
        <label>Full name<input required name="name" autoComplete="name" /></label>
        <label>Business email<input required name="email" type="email" autoComplete="email" /></label>
      </div>
      <div className="field-row">
        <label>Company<input name="company" autoComplete="organization" /></label>
        <label>Area of interest<select name="interest" defaultValue="Corporate finance"><option>Corporate finance</option><option>Strategic transactions</option><option>Regulatory readiness</option><option>Risk architecture</option><option>Other</option></select></label>
      </div>
      <label>How can we help?<textarea required name="message" rows={6} /></label>
      <button className="button" type="submit">Send enquiry <span aria-hidden="true">↗</span></button>
      <p className="form-note">By submitting, you agree that we may use your details to respond to this enquiry.</p>
    </form>
  );
}
