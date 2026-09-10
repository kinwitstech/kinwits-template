import { InsightArticleLayout } from "@/components/insights/InsightArticleLayout";
import { getInsightBySlug } from "@/data/insights";

const insight = getInsightBySlug("clinical-ai-past-the-demo")!;

export default function ClinicalAiPastTheDemo() {
  return (
    <InsightArticleLayout insight={insight}>
      <p>
        A clinical AI demo is not hard to build. Give a language model a patient summary and a decent prompt and it
        will produce something that reads like a treatment plan. Put that on a screen in front of a physician and
        you will get interest, sometimes real enthusiasm. We have watched it happen.
      </p>
      <p>
        Then the demo ends and the actual work starts, and most of these projects never come back. The gap between a
        convincing demo and a system a doctor opens on a Tuesday morning is much wider than it looks, and almost
        none of that gap is about the model.
      </p>
      <h2>The demo runs on data that does not exist</h2>
      <p>
        Every clinical demo we have seen — including our own early ones — runs on a clean patient record. Complete
        history, structured medications, labs with units and reference ranges, no contradictions. That record was
        either handcrafted or cherry-picked, and it is nothing like what comes out of a live EMR.
      </p>
      <p>
        Real records have the same medication recorded three ways across two years. They have free-text notes where
        structured fields should be. They have labs from an outside facility that came in as a scanned PDF. They
        have fields that were technically required, so somebody typed a period into them.
      </p>
      <p>
        The first real thing that happens when you connect an agent to production data is that your beautiful
        prompt starts receiving garbage, and the model — being a language model — produces confident output anyway.
        That is the failure mode that matters. Not refusal. Confident nonsense built on a field somebody mistyped in
        2019.
      </p>
      <h2>You are not building an agent, you are building a review surface</h2>
      <p>
        The thing that gets a clinical agent into production is not the quality of its output. It is how quickly a
        physician can decide whether the output is wrong.
      </p>
      <p>
        This reframes the entire product. A wall of generated prose is close to useless clinically, not because it
        is inaccurate but because verifying it takes longer than writing the plan by hand. If your agent saves ten
        minutes of writing and costs the doctor twelve of checking, it is a net loss and it will be abandoned
        quietly within a month.
      </p>
      <p>
        What works is structure that maps to how the clinician already thinks, with every claim traceable to the
        record it came from. Which lab. Which note. Which date. If a physician has to go hunting in the EMR to check
        a single assertion, you have moved the work rather than removed it.
      </p>
      <ul>
        <li>Every generated claim carries a pointer back to its source record</li>
        <li>Output is structured into the sections the clinician already scans, not free prose</li>
        <li>Uncertainty is surfaced explicitly rather than smoothed into confident language</li>
        <li>The reviewer can reject or edit any single element without regenerating the whole plan</li>
        <li>Nothing reaches a patient without a human having actively approved it</li>
      </ul>
      <p className="pull">
        If verifying the output takes longer than producing it by hand, the agent is a net loss no matter how good
        the output is.
      </p>
      <h2>The integration is the project</h2>
      <p>
        We have written about this separately because it deserves its own post, but it belongs here too: the
        majority of the engineering hours in a clinical agent are not spent on the agent. They are spent moving data
        correctly between systems that were never designed to talk to each other, and doing it in a way that
        survives retries, partial failures, and the vendor changing a field without telling you.
      </p>
      <p>When we scope this work now, we assume the agent logic is the smaller half.</p>
      <h2>Compliance is an architecture decision, not a checkbox</h2>
      <p>
        Teams tend to treat HIPAA as something you add near the end — a BAA, an encryption setting, a policy
        document. In practice it determines your architecture from the first commit: which model you can call,
        where inference happens, what gets logged, how long anything persists, who can see what and under which
        role.
      </p>
      <p>
        Retrofitting this is expensive and often means rebuilding. Deciding it upfront costs very little. The
        uncomfortable part is that it constrains your options early, when constraining options feels premature — but
        the alternative is discovering in month four that your observability stack has been writing patient data to
        a log aggregator.
      </p>
      <h2>What actually got ours across the line</h2>
      <p>
        Our clinical AI agent is in daily use today, generating personalized treatment plans from live EMR data with
        a provider review step. Getting there was not a breakthrough. It was a sequence of unglamorous decisions:
      </p>
      <ul>
        <li>Scope narrow enough that being wrong was cheap — one condition, one workflow, one clinic</li>
        <li>Build against production data early, not clean fixtures</li>
        <li>Design the review surface before optimizing the generation</li>
        <li>Decide the compliance posture in week one, not month four</li>
        <li>Put it in front of a real clinician while it was still embarrassing</li>
      </ul>
      <p>That last one is the hardest and the most valuable.</p>
      <p>
        None of this is exotic. It is the same discipline any production system demands, applied in a setting where
        being confidently wrong has consequences. The reason so few clinical agents make it past the demo is not
        that the problem is unsolvable. It is that the demo is genuinely easy and everything after it genuinely is
        not.
      </p>
    </InsightArticleLayout>
  );
}
