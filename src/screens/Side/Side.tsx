import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Progress } from "../../components/ui/progress";

const supportCards = [
  {
    title: "Ny studerende?",
    description:
      "Er du ny på AAU? Opret en konto og få adgang til alle dine studierelaterende værktøjer.",
    action: "Opret konto",
  },
  {
    title: "Mangler hjælp?",
    description:
      "Har du spørgsmål eller problemer vedrørende dit login, så send os en besked.",
    action: "Opret sag",
  },
];

const formFields = [
  {
    id: "username",
    label: "Username",
    placeholder: "Indtast et nyt selvvalgt studie-ID",
    type: "text",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Indtast selvvalgt adgangskode",
    type: "password",
  },
  {
    id: "current-status",
    label: "Current Status",
    placeholder: "fx. ansøger, tidligere studerende, firma...",
    type: "text",
  },
];

export const Side = (): JSX.Element => {
  return (
    <main className="flex min-h-screen min-w-[1024px] overflow-hidden [background:linear-gradient(to_bottom_right,rgba(255,255,255,1)_0%,rgba(248,250,255,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(255,255,255,1)_0%,rgba(248,250,255,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(255,255,255,1)_0%,rgba(248,250,255,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(255,255,255,1)_0%,rgba(248,250,255,1)_50%)_top_right_/_50%_50%_no-repeat]">
      <aside className="relative flex min-h-[1080px] w-[746px] shrink-0 flex-col overflow-hidden px-[60px] pb-[65px] pt-10 text-[#f2f2f2]">
        <img
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          alt=""
          aria-hidden="true"
          src="/rectangle-4.svg"
        />
        <img
          className="relative h-[45px] w-[172px] object-cover"
          alt="Aalborg University"
          src="/--aau-left-white-uk-1.png"
        />
        <section className="relative mt-[148px]">
          <p className="[font-family:'Barlow',Helvetica] text-lg font-light leading-normal">
            Studieportalen AAU
          </p>
          <h1 className="mt-[14px] whitespace-nowrap [font-family:'Barlow',Helvetica] text-[52px] font-normal leading-normal tracking-[0]">
            <span className="font-light">
              Velkommen til
              <br />
            </span>
            <span className="font-bold">Studieportalen</span>
          </h1>
          <p className="mt-[76px] [font-family:'Barlow',Helvetica] text-lg font-normal leading-normal">
            Log ind for at få adgang til studieoplysninger,
            <br />
            opgaver, dokumenter og meget mere.
          </p>
        </section>
        <section
          className="relative mt-auto grid grid-cols-2 gap-[15px]"
          aria-label="Hjælp og oprettelse"
        >
          {supportCards.map((card) => (
            <Card
              key={card.title}
              className="h-[203px] rounded-xl border-0 bg-[#49447d] py-0 text-[#f2f2f2] shadow-none"
            >
              <CardContent className="flex h-full flex-col px-8 pb-[31px] pt-[27px]">
                <h2 className="[font-family:'Barlow',Helvetica] text-lg font-bold leading-normal">
                  {card.title}
                </h2>
                <p className="mt-[8px] min-h-[57px] [font-family:'Barlow',Helvetica] text-sm font-normal leading-normal">
                  {card.description}
                </p>
                <Button
                  type="button"
                  className="mt-auto h-9 w-[161px] rounded-[20px] border border-[#87ab7f] bg-[#688361] px-0 [font-family:'Barlow',Helvetica] text-lg font-bold text-white hover:bg-[#688361]/90"
                >
                  {card.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </aside>
      <section className="flex min-h-[1080px] min-w-0 flex-1 justify-center px-8 pt-[125px]">
        <div className="flex w-[624px] flex-col">
          <Card className="h-[750px] w-full rounded-3xl border-2 border-[#f0f0f080] bg-[#fefefe] py-0 shadow-[0px_12px_12px_#00000005]">
            <CardContent className="h-full px-[48px] pb-[43px] pt-[35px]">
              <Button
                type="button"
                variant="ghost"
                className="-ml-2 h-auto gap-[17px] px-0 py-0 [font-family:'Barlow',Helvetica] text-xs font-medium text-[#8b879c] hover:bg-transparent hover:text-[#211954]"
              >
                <ChevronLeftIcon className="h-[15px] w-2 stroke-[2]" />
                Tilbage
              </Button>
              <header className="mt-[9px]">
                <h2 className="[font-family:'Barlow',Helvetica] text-2xl font-bold leading-normal text-[#211954]">
                  Create your account
                </h2>
                <p className="mt-[8px] [font-family:'Barlow',Helvetica] text-xl font-normal leading-normal text-[#211954]">
                  Type your informations below
                </p>
              </header>
              <form
                className="mt-[45px]"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="space-y-[23px]">
                  {formFields.map((field) => (
                    <div key={field.id}>
                      <Label
                        htmlFor={field.id}
                        className="block [font-family:'Barlow',Helvetica] text-xl font-medium leading-normal text-[#211954]"
                      >
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="mt-[20px] h-12 rounded-xl border-2 border-[#efefef] bg-white px-[21px] [font-family:'Barlow',Helvetica] text-sm font-medium text-[#211954] placeholder:text-[#aaa6c7] focus-visible:ring-[#211954]"
                      />
                    </div>
                  ))}
                </div>
                <Button
                  type="submit"
                  className="mt-[45px] h-[71px] w-full rounded-xl bg-[#211954] [font-family:'Barlow',Helvetica] text-lg font-bold text-white hover:bg-[#211954]/90"
                >
                  Continue
                </Button>
              </form>
              <div className="mt-[27px] px-1">
                <p className="[font-family:'Inter',Helvetica] text-sm font-medium leading-normal text-[#908da4]">
                  2 out of 4 tasks completed
                </p>
                <Progress
                  value={62.3}
                  className="mt-[10px] h-2 rounded-3xl bg-[#ededed] [&>div]:rounded-3xl [&>div]:bg-[#688362] [&>div]:shadow-[0px_4px_4px_#0000001f]"
                />
              </div>
            </CardContent>
          </Card>
          <p className="mt-[45px] text-center [font-family:'Barlow',Helvetica] text-xl font-medium leading-normal text-[#9f9f9f]">
            har du problemer ved login, bedes du oprette en sag{" "}
            <button
              type="button"
              className="font-extrabold text-[#211954] underline"
            >
              her
            </button>
            <br />
            eller ringe{" "}
            <a
              className="font-extrabold text-[#211954] underline"
              href="tel:+4599402020"
            >
              +45 9940 2020
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
