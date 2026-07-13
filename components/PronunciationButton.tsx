"use client";

type PronunciationButtonProps = {
  text: string;
  language?: string;
};

export default function PronunciationButton({
  text,
  language = "fr-FR",
}: PronunciationButtonProps) {
  function speak() {
    if (!("speechSynthesis" in window)) {
      alert("Speech playback is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();

    const exactVoice = voices.find(
      (voice) => voice.lang.toLowerCase() === language.toLowerCase()
    );

    const generalLanguage = language.split("-")[0].toLowerCase();

    const matchingVoice = voices.find((voice) =>
      voice.lang.toLowerCase().startsWith(generalLanguage)
    );

    utterance.voice = exactVoice ?? matchingVoice ?? null;

    window.speechSynthesis.speak(utterance);
  }

  function handleClick() {
    const voices = window.speechSynthesis.getVoices();

    if (voices.length > 0) {
      speak();
      return;
    }

    window.speechSynthesis.onvoiceschanged = () => {
      speak();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="secondary-button inline-flex items-center gap-2"
      aria-label={`Hear pronunciation of ${text}`}
    >
      <span aria-hidden="true"></span>
      Listen
    </button>
  );
}