import Image from 'next/image'
import Panel from './components/Panel'
import * as React from 'react';
import Nav from './components/Nav';
import './globals.css';
import Buy from './components/Buy';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="flex flexbox min-h-screen flex-col  max-w-full max-h-full">
    <Panel />
    <Buy />
    <Tokenomics />
    <Roadmap />
    <Contact />
    </main>
  )
}
