import React from 'react';

const defaultIconClass = "h-6 w-6";

export const MenuIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
    </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M13.986 0.666504C6.62602 0.666504 0.666016 6.63984 0.666016 13.9998C0.666016 21.3598 6.62602 27.3332 13.986 27.3332C21.3593 27.3332 27.3327 21.3598 27.3327 13.9998C27.3327 6.63984 21.3593 0.666504 13.986 0.666504ZM13.9993 24.6665C8.10602 24.6665 3.33268 19.8932 3.33268 13.9998C3.33268 8.1065 8.10602 3.33317 13.9993 3.33317C19.8927 3.33317 24.666 8.1065 24.666 13.9998C24.666 19.8932 19.8927 24.6665 13.9993 24.6665Z" fill="currentColor"></path>
        <path d="M13.9993 5.99984C15.8438 5.99984 17.3327 7.53486 17.3327 9.43646C17.3327 11.3381 15.8438 12.8731 13.9993 12.8731C12.1549 12.8731 10.666 11.3381 10.666 9.43646C10.666 7.53486 12.1549 5.99984 13.9993 5.99984ZM13.9993 22.2665C11.2216 22.2665 8.76602 20.8002 7.33268 18.5779C7.36602 16.2982 11.7771 15.0496 13.9993 15.0496C16.2105 15.0496 20.6327 16.2982 20.666 18.5779C19.2327 20.8002 16.7771 22.2665 13.9993 22.2665Z" fill="currentColor"></path>
    </svg>
);

export const CartIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M280-80q-33 0-56.5-23.5T200-160v-480q0-33 23.5-56.5T280-720h120q0-83 58.5-141.5T600-920q83 0 141.5 58.5T800-720h120q33 0 56.5 23.5T1000-640v480q0 33-23.5 56.5T920-80H280Zm0-80h640v-480H280v480Zm120-560h400q0-66-47-113t-113-47q-66 0-113 47t-47 113Zm-120 80v-80 80Z" />
    </svg>
);

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M400-240 344-296l184-184-184-184 56-56 240 240-240 240Z" />
    </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
    <svg viewBox="0 0 96 96" version="1.1" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
                <rect fill="#00B67A" fillRule="nonzero" x="0" y="0" width="96" height="96"></rect>
                <path d="M48,64.7 L62.6,61 L68.7,79.8 L48,64.7 Z M81.6,40.4 L55.9,40.4 L48,16.2 L40.1,40.4 L14.4,40.4 L35.2,55.4 L27.3,79.6 L48.1,64.6 L60.9,55.4 L81.6,40.4 Z" fill="#FFFFFF" fillRule="nonzero"></path>
            </g>
        </g>
    </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const ResetIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0M2.985 19.644A8.25 8.25 0 0116.023 9.348" />
    </svg>
);