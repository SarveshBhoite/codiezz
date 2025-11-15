// "use client";

// import { useEffect, useState } from "react";

// export function BackgroundDecoration() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <>
//       {/* Main Border Frame */}
//       <div
//         aria-hidden="true"
//         className="
//           pointer-events-none 
//           fixed 
//           inset-0 
//           z-[-1]
//           overflow-hidden
//         "
//       >
//         {/* Desktop Border */}
//         <div className="
//           hidden 
//           lg:block 
//           absolute 
//           inset-y-0 
//           left-1/2 
//           w-full 
//           max-w-[85rem] 
//           -translate-x-1/2 
//           border-x 
//           border-border-light
//         " />
        
//         {/* Mobile/Tablet Subtle Background */}
//         <div className="
//           lg:hidden 
//           absolute 
//           inset-0 
//           bg-gradient-to-b 
//           from-surface-elevated/50 
//           to-transparent
//         " />
//       </div>

//       {/* Optional: Animated Background Elements */}
//       <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
//         {/* Gradient Orbs (GPU-optimized) */}
//         <div className="
//           absolute 
//           -top-1/2 
//           -left-1/2 
//           h-[200%] 
//           w-[200%] 
//           animate-float
//           opacity-30
//           dark:opacity-10
//         ">
//           <div className="
//             absolute 
//             top-1/4 
//             left-1/4 
//             h-96 
//             w-96 
//             rounded-full 
//             bg-accent/20 
//             blur-3xl
//           " />
//         </div>
        
//         <div className="
//           absolute 
//           -bottom-1/2 
//           -right-1/2 
//           h-[200%] 
//           w-[200%] 
//           animate-float 
//           animation-delay-500
//           opacity-30
//           dark:opacity-10
//         ">
//           <div className="
//             absolute 
//             bottom-1/4 
//             right-1/4 
//             h-96 
//             w-96 
//             rounded-full 
//             bg-warning/20 
//             blur-3xl
//           " />
//         </div>
//       </div>
//     </>
//   );
// }