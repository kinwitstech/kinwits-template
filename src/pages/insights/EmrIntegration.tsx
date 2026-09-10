import { InsightArticleLayout } from "@/components/insights/InsightArticleLayout";
import { getInsightBySlug } from "@/data/insights";

const insight = getInsightBySlug("emr-integration")!;

export default function EmrIntegration() {
  return (
    <InsightArticleLayout insight={insight}>
      <p>
        Ask a team scoping a healthcare product where the risk is and they will say the model, or the compliance
        review, or adoption. Those are real. But the thing that most often kills the timeline is the part that got
        two lines in the estimate: connecting to the EMR.
      </p>
      <p>It looks like plumbing. It is scoped like plumbing. It is not plumbing.</p>
      <h2>The API is the smallest part of the problem</h2>
      <p>
        Most EMRs expose something you can call. Documentation quality varies, auth is sometimes unusual, rate
        limits are sometimes undocumented, but reading and writing records is rarely the hard part. Teams get a
        successful call working in the first week and conclude the integration is nearly done.
      </p>
      <p>
        What is actually hard is that the EMR is a record of what humans typed over a period of years, under time
        pressure, with varying conventions, across staff who have since left. The schema tells you what a field can
        contain. It tells you nothing about what it does contain.
      </p>
      <ul>
        <li>The same medication recorded under three different names across two years</li>
        <li>Structured fields left empty because the information went into a free-text note</li>
        <li>Outside labs that arrived as scanned documents and were never transcribed</li>
        <li>Required fields satisfied with a placeholder character</li>
        <li>Duplicate patient records created during a front-desk workflow change</li>
      </ul>
      <p>None of this is anyone’s fault. It is what a decade of clinical practice looks like when you read it as data.</p>
      <h2>Writing back is where it gets serious</h2>
      <p>
        Reading bad data produces bad output. Writing to a clinical record produces consequences. The moment your
        system creates an encounter, updates a plan, or writes a note, the failure modes stop being cosmetic.
      </p>
      <p>
        Every write path needs to answer: what happens if this fires twice? What happens if it half-succeeds? How
        does a human tell, afterwards, what the system did and why? Idempotency and audit trails are not
        sophistication here — they are the minimum bar for touching a medical record at all.
      </p>
      <p className="pull">
        Reading bad data gives you bad output. Writing bad data gives you a clinical record that is wrong, and no
        obvious way to find out.
      </p>
      <h2>The second system nobody scoped</h2>
      <p>
        In practice the EMR is never alone. There is a CRM holding marketing and intake. A payments system. A
        scheduling tool. Sometimes a spreadsheet that is load-bearing for a workflow nobody documented.
      </p>
      <p>
        Each of these has its own idea of who a patient is. Reconciling those identities — deciding what makes two
        records the same person, and what to do when the systems disagree — is a genuinely hard problem that gets
        scoped as a mapping table.
      </p>
      <h2>How to scope it honestly</h2>
      <p>We now assume integration is the larger half of any healthcare build and scope accordingly. Concretely:</p>
      <ul>
        <li>Pull real production data in week one, before committing to a timeline</li>
        <li>Profile it for the failure classes above and put the findings in writing</li>
        <li>Treat identity reconciliation as its own workstream, not a field mapping</li>
        <li>Design every write as idempotent and auditable from the start</li>
        <li>Budget explicitly for the vendor changing something without notice</li>
      </ul>
      <p>
        The first item is the one that matters. Almost every failed healthcare timeline we have seen traces back to
        an estimate written against a schema instead of against the data. The schema is aspirational. The data is
        what you have to build for.
      </p>
      <p>None of this makes integration exciting. It makes it survivable, which for this class of project is the more useful property.</p>
    </InsightArticleLayout>
  );
}
