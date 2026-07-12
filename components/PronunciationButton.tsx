"use client";

type PronunciationButtonProps = {
  text: string;
  language?: string;
};

export default function PronunciationButton({
  text,
  language = "fr-FR",
}: PronunciationButtonProps) {
  function playPronunciation() {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = language;
    speech.rate = 0.8;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  }

  return (
    <button
      type="button"
      onClick={playPronunciation}
      aria-label={`Play pronunciation for ${text}`}
      className="secondary-button whitespace-nowrap"
    >
      Listen
    </button>
  );
}