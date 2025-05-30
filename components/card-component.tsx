import * as React from 'react';
import { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { FlipCard } from './FlipCard';

interface ICardProps {
    question: string,
    answer: string,
    currentIndex: number,
    totalCards: number,
    onNext: () => void,
    onPrevious: () => void,
    onReset: () => void
}

const FlashCard: React.FunctionComponent<ICardProps> = ({
    question,
    answer,
    currentIndex,
    totalCards,
    onNext,
    onPrevious,
    onReset
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNext = () => {
        setIsFlipped(false);
        onNext();
    };

    const handlePrevious = () => {
        setIsFlipped(false);
        onPrevious();
    };

    const handleReset = () => {
        setIsFlipped(false);
        onReset();
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full ">
            {/* Progress indicator */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 px-2 sm:px-4">
                <span className="text-sm text-gray-600">
                    Carte {currentIndex + 1} sur {totalCards}
                </span>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleReset}
                        className="flex items-center gap-1"
                    >
                        <RotateCcw className="h-4 w-4" />
                        Réinitialiser
                    </Button>
                </div>
            </div>

            {/* Card */}
            <FlipCard answer={answer} question={question} isFlipped={isFlipped} handleClick={handleClick}/>

            {/* Navigation buttons */}
            <div className="flex gap-4 mt-4 w-full justify-center px-2 sm:px-4">
                <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-1 min-w-[120px]"
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Précédent</span>
                </Button>
                <Button
                    variant="outline"
                    onClick={handleNext}
                    disabled={currentIndex === totalCards - 1}
                    className="flex items-center gap-1 min-w-[120px]"
                >
                    <span className="hidden sm:inline">Suivant</span>
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            {/* Instructions */}
            <p className="text-sm text-gray-500 mt-2 text-center">
                Cliquez sur la carte pour voir la {isFlipped ? 'question' : 'réponse'}
            </p>
        </div>
    );
};


export default FlashCard;
