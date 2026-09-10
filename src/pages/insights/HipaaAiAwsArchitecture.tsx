import { InsightArticleLayout } from "@/components/insights/InsightArticleLayout";
import { getInsightBySlug } from "@/data/insights";

const insight = getInsightBySlug("hipaa-ai-aws-architecture")!;

export default function HipaaAiAwsArchitecture() {
  return (
    <InsightArticleLayout insight={insight}>
      <p>
        Most HIPAA guidance for AI systems is either legal language with no engineering content, or a vendor page
        telling you their product is compliant. Neither helps when you are deciding whether inference can leave your
        VPC.
      </p>
      <p>
        This is a practical account of the decisions that actually shape the architecture when you are running
        language models over protected health information on AWS. It is not legal advice, and your compliance
        officer outranks this post.
      </p>
      <h2>Decision one: where inference happens</h2>
      <p>
        This is the decision everything else hangs off. If protected health information is going to reach a model,
        you need that model to sit inside a boundary you control and a vendor relationship that covers it.
      </p>
      <p>
        Practically that means a managed service inside your own account under a signed BAA — for us, Bedrock —
        rather than a public API endpoint outside it. Not because the public endpoint is careless, but because the
        compliance boundary is the thing you have to be able to describe, and “our data went to a third party over
        the internet” is a much harder sentence to defend than “inference happened inside our VPC.”
      </p>
      <p>
        The second-order effect is what matters: once inference is inside the boundary, a large amount of downstream
        anxiety disappears. Prompt logging, response caching, and debugging traces stop being compliance incidents
        waiting to happen.
      </p>
      <h2>Decision two: what you are allowed to log</h2>
      <p>
        This is where well-intentioned teams get hurt. Standard observability practice is to log liberally — request
        payloads, model inputs, full responses — and figure out retention later. In a clinical system, that default
        writes protected health information into every log sink you own, including the ones a third-party vendor
        operates.
      </p>
      <p>
        The workable pattern is to separate the two things you actually need. You need to debug system behavior, and
        you need an audit trail of clinical decisions. They are different problems with different storage
        requirements.
      </p>
      <ul>
        <li>Operational logs: identifiers, timings, error classes, model and version — no clinical content</li>
        <li>Clinical audit trail: encrypted, access-controlled, retained deliberately, queryable by patient and by reviewer</li>
        <li>Never the same store, never the same retention policy, never the same access grants</li>
      </ul>
      <h2>Decision three: whose account it runs in</h2>
      <p>
        We run client workloads in the client’s own AWS account and operate inside it through scoped IAM roles. This
        is partly a commercial position and partly an architectural one, and it is worth separating the two.
      </p>
      <p>
        Commercially, it means the client is never hostage to us. Their data never sits in our infrastructure, and
        if the relationship ends, nothing has to be migrated.
      </p>
      <p>
        Architecturally, it forces a discipline that is good for everyone: because we are a guest, every permission
        we hold has to be justified and scoped. There is no drift into “the service account can do everything
        because it was easier.” Least privilege stops being a policy you aspire to and becomes the only way you can
        work.
      </p>
      <p className="pull">
        Least privilege is easy to write into a policy document and hard to maintain in an account you own. It is
        considerably easier to maintain in one you do not.
      </p>
      <h2>Decision four: what persists, and for how long</h2>
      <p>
        Language model systems accumulate intermediate state — retrieved context, tool call results, partial
        generations, evaluation traces. Each of these is a place clinical data can settle, and none of them are
        obvious in an architecture diagram.
      </p>
      <p>
        The question worth asking early, for every component: does this need to persist at all? A surprising amount
        of intermediate state exists only because persistence was the default, not because anything reads it.
        Ephemeral by default, persistent by decision, is a much safer posture than the reverse.
      </p>
      <p>
        Encryption in transit and at rest is table stakes and rarely the interesting part. The interesting part is
        inventory: knowing every place data can come to rest, including the ones you did not design.
      </p>
      <h2>What is mostly theater</h2>
      <p>Some of what gets sold as HIPAA-readiness is not doing much work:</p>
      <ul>
        <li>A compliance badge on a vendor page, absent a BAA that covers your actual usage</li>
        <li>Encryption at rest treated as the headline control rather than the baseline</li>
        <li>Access policies that exist as documents but are not enforced in IAM</li>
        <li>De-identification that survives a casual glance but not a re-identification attempt</li>
      </ul>
      <p>
        None of these are harmful. They are just not where the risk is. The risk is in the log sink nobody audited
        and the intermediate cache nobody knew existed.
      </p>
      <h2>The shape of it</h2>
      <p>
        Decide inference location first. Split observability from audit before writing either. Run in the client
        account with scoped roles. Make persistence a decision rather than a default. Then inventory the whole thing
        and look specifically for the places data comes to rest that are not on your diagram.
      </p>
      <p>
        Every one of those is cheap in week one and expensive in month six. That asymmetry is the entire argument
        for deciding compliance posture before you write the interesting code.
      </p>
    </InsightArticleLayout>
  );
}
