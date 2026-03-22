import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Briefcase, Mail, CalendarDays } from 'lucide-react';
import { jobOpenings } from '@/data/jobOpenings';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const job = jobOpenings.find((j) => j.id === id);

  if (!job) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-4xl font-medium mb-4">Position Not Found</h1>
            <p className="text-muted-foreground mb-8">The job posting you're looking for doesn't exist.</p>
            <Button variant="outline" onClick={() => navigate('/career')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK TO CAREERS
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Back button + Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/career')}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="tracking-widest uppercase text-[10px]">Back to Careers</span>
            </button>

            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
                {job.title}
              </h1>
              <span
                className={`text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full font-medium ${
                  job.status === 'Open'
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500/10 text-red-500/80'
                }`}
              >
                {job.status}
              </span>
            </div>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              {job.experience && (
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>{job.experience}</span>
                </div>
              )}
              {job.startDate && (
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>Start: {job.startDate}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Apply at: <a href={`mailto:${job.applyEmail}`} className="underline hover:text-foreground">{job.applyEmail}</a></span>
              </div>
            </div>

            {job.status === 'Open' && (
              <a
                href={`mailto:${job.applyEmail}?subject=${encodeURIComponent('Application for ' + job.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-10 text-xs tracking-widest font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                APPLY NOW
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Detailed content */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-border pt-12 space-y-12">

              {/* About the Role */}
              {job.aboutRole && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">About the Role</h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {job.aboutRole}
                  </div>
                </div>
              )}

              {/* Key Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Key Responsibilities</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Required Skills */}
              {job.requiredSkills && job.requiredSkills.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Required Skills &amp; Technologies</h2>
                  <ul className="space-y-3">
                    {job.requiredSkills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                        <span>
                          <strong className="text-foreground">{skill.label}:</strong> {skill.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nice-to-Have */}
              {job.niceToHave && job.niceToHave.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Nice-to-Have Skills</h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Who You Are */}
              {job.whoYouAre && job.whoYouAre.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Who You Are</h2>
                  <ul className="space-y-3">
                    {job.whoYouAre.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Closing Note */}
              {job.closingNote && (
                <div className="bg-muted/20 p-8 rounded-sm">
                  <p className="text-muted-foreground leading-relaxed italic">
                    {job.closingNote}
                  </p>
                </div>
              )}

              {/* Apply CTA at bottom */}
              {job.status === 'Open' && (
                <div className="pt-4">
                  <a
                    href={`mailto:${job.applyEmail}?subject=${encodeURIComponent('Application for ' + job.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-11 px-10 text-xs tracking-widest font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    APPLY FOR THIS POSITION
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobDetail;
