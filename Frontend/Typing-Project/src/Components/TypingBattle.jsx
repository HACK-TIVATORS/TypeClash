import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "./KeyBoard"; // Adjust path if needed
import axios from "axios"; // You need to have axios installed

const TypingBattle = () => {
  const navigate = useNavigate();
  const text =
    "The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog  The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog";

  const [selectedDuration, setSelectedDuration] = useState(60);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(selectedDuration);
  const [pressedKey, setPressedKey] = useState("");
  const [errors, setErrors] = useState([]);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [isTextComplete, setIsTextComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // ⏳ Loading state

  const inputRef = useRef(null);
  const textContainerRef = useRef(null);
  const currentCharRef = useRef(null);

  useEffect(() => {
    setTimeLeft(selectedDuration);
    setIsTimerActive(false);
  }, [selectedDuration]);

  useEffect(() => {
    if (input.length > 0 && !isTimerActive && timeLeft === selectedDuration) {
      setIsTimerActive(true);
      setHasStartedTyping(true);
    }

    if (input.length >= text.length) {
      setIsTextComplete(true);
    } else {
      setIsTextComplete(false);
    }
  }, [input, isTimerActive, timeLeft, selectedDuration]);

  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isTimerActive, timeLeft]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (currentCharRef.current && textContainerRef.current) {
      const container = textContainerRef.current;
      const currentChar = currentCharRef.current;

      const containerRect = container.getBoundingClientRect();
      const charRect = currentChar.getBoundingClientRect();

      if (charRect.top > containerRect.bottom - 50) {
        container.scrollTop += charRect.height * 2;
      }
    }
  }, [input]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
      setPressedKey(value.slice(-1));
    } else {
      setPressedKey("");
    }

    const newErrors = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== text[i]) {
        newErrors.push(i);
      }
    }
    setErrors(newErrors);
  };

  const renderText = () => {
    return text.split("").map((char, i) => {
      const typedChar = input[i];
      const isCorrect = typedChar === char;
      const isTyped = typedChar !== undefined;
      const isCurrent = input.length === i;
      const showInitialCursor = !hasStartedTyping && i === 0;

      let className = "text-gray-400";
      if (isTyped) {
        className = isCorrect ? "text-green-500" : "text-red-500";
      }

      if (
        (isCurrent && hasStartedTyping && i < text.length) ||
        showInitialCursor
      ) {
        className += " border-l-2 border-blue-500 animate-pulse";
      }

      return (
        <span
          key={i}
          className={className}
          ref={isCurrent || showInitialCursor ? currentCharRef : null}
        >
          {char}
        </span>
      );
    });
  };

  const handleKeyboardClick = () => {
    inputRef.current?.focus();
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
    setInput("");
    setErrors([]);
    setIsTimerActive(false);
    setHasStartedTyping(false);
    setIsTextComplete(false);
    setPressedKey("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const getKeyboardPressedKey = () => {
    if (isTextComplete && input.length >= text.length) {
      return "";
    }
    return pressedKey;
  };

  // ✅ Send input to backend when time ends
  useEffect(() => {
    if (timeLeft === 0 && !isSubmitting) {
      setIsSubmitting(true);
      axios
        .post("/api/typing-battle/result", {
          typedText: input,
          duration: selectedDuration,
        })
        .then((response) => {
          const { wpm, accuracy, result } = response.data;

          navigate("/result", {
            state: {
              wpm,
              accuracy,
              result,
            },
          });
        })
        .catch((error) => {
          console.error("Error fetching result:", error);
          alert("An error occurred while calculating your result.");
        });
    }
  }, [timeLeft, input, selectedDuration, navigate, isSubmitting]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-800 text-white font-sans">
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        {/* Back button + Title */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/cardsPage")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            ← Back
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold text-center flex-1">
            Typing Battle
          </h1>
        </div>

        {/* Time selector */}
        <div className="flex justify-center space-x-4 mb-6">
          {[30, 60].map((sec) => (
            <button
              key={sec}
              className={`px-4 py-2 rounded-full font-bold ${
                selectedDuration === sec
                  ? "bg-purple-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => handleDurationChange(sec)}
            >
              {sec}s
            </button>
          ))}
        </div>

        {/* Text display */}
        <div className="bg-gray-900 rounded-lg shadow-md p-6 w-full mb-4">
          <div
            ref={textContainerRef}
            className="font-mono text-xl md:text-2xl leading-relaxed whitespace-pre-wrap px-8 py-6 max-h-60 overflow-y-auto"
            onClick={handleKeyboardClick}
          >
            {renderText()}
          </div>
        </div>

        {/* Timer */}
        <div className="flex justify-end items-center mb-2">
          <div className="text-lg font-semibold">Time left: {timeLeft}s</div>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden mb-10">
          <div
            className="bg-purple-500 h-full transition-all duration-300"
            style={{ width: `${(100 * timeLeft) / selectedDuration}%` }}
          ></div>
        </div>

        {/* Invisible input */}
        <input
          ref={inputRef}
          className="absolute opacity-0 w-0 h-0"
          value={input}
          onChange={handleChange}
          disabled={timeLeft === 0}
          autoFocus
        />

        {/* Virtual keyboard */}
        <div onClick={handleKeyboardClick} className="mt-auto">
          <Keyboard pressedKey={getKeyboardPressedKey()} />
        </div>
      </div>
    </div>
  );
};

export default TypingBattle;
