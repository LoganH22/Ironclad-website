import Container from "./Container";

const DEMO_URL = "https://app.ironcladconsultinggroup.net/demo";

// A slim bar above the header. It scrolls away with the page, so the sticky
// header below keeps its usual place.
export default function AnnouncementBar() {
  return (
    <div className="bg-navy text-white">
      <Container className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center text-sm">
        <span className="text-white/85">
          <strong className="font-semibold text-white">New:</strong> our client dashboard is here.
        </span>
        <a
          href={DEMO_URL}
          className="inline-flex items-center gap-1 font-semibold text-white underline decoration-brass-soft decoration-2 underline-offset-4 transition-colors duration-160 hover:text-brass-soft"
        >
          Sign up for a demo <span aria-hidden="true">&rarr;</span>
        </a>
      </Container>
    </div>
  );
}
