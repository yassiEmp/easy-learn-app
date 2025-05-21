import { Card, CardContent } from "./ui/card"
import styles from './card-component.module.css';

type TFlipCard={
    handleClick: React.MouseEventHandler,
    question: string,
    answer: string,
    isFlipped: Boolean
}
export function FlipCard({ handleClick, question, answer, isFlipped }:TFlipCard) {
    return <div
        className={`w-full h-[300px] sm:h-[400px] flex justify-center items-center relative cursor-pointer ${styles['perspective-1000']}`}
        onClick={handleClick}
    >
        <div className={` max-w-[926px] w-full h-full transition-transform duration-500 ${styles['transform-style-3d']} ${isFlipped ? styles['rotate-y-180'] : ''} animate-bounce-in`}>
            
            {/* Front of card */}
            <Card className={`w-full h-full text-center flex justify-center items-center absolute ${styles['backface-hidden']} p-2 sm:p-6`}>
                <CardContent className='text-lg sm:text-xl md:text-2xl font-medium'>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm text-gray-500">Question</span>
                        <div className="break-words">{question}</div>
                    </div>
                </CardContent>
            </Card>

            {/* Back of card */}
            <Card className={`w-full h-full text-center flex justify-center items-center absolute ${styles['backface-hidden']} ${styles['rotate-y-180']} bg-blue-50 p-2 sm:p-6`}>
                <CardContent className='text-lg sm:text-xl md:text-2xl font-medium'>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm text-gray-500">Réponse</span>
                        <div className="break-words">{answer}</div>
                    </div>
                </CardContent>
            </Card>

        </div>
    </div>
}