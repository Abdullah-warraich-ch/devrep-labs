import ArticlePage, { articleMetadata } from "@/components/ArticlePage";

const title = "Privacy Policy";
const description = "How DevRep Labs handles project inquiries, demo requests and website analytics.";
export const metadata = articleMetadata(title, description, "/privacy");

export default function PrivacyPage() {
  return (
    <ArticlePage title={title} introduction="When you contact DevRep Labs, we use the information you submit to respond to your request.">
      <section><h2>Project inquiries and demos</h2><p>Our forms ask for your name, email address and selections such as your service, budget or preferred meeting time. If you include a message, it is sent with the inquiry. We use Web3Forms to deliver these details to our team.</p></section>
      <section><h2>Website analytics</h2><p>When Google Analytics is enabled, it helps us understand which pages people visit and whether an inquiry or demo request succeeds. Our lead event includes the request type. Your form answers are sent separately to our team.</p></section>
      <section><h2>Questions about your information</h2><p>To ask what information we have about your inquiry, request a correction or ask us to delete it, email <a href="mailto:contact@devrep.site">contact@devrep.site</a>.</p></section>
    </ArticlePage>
  );
}
