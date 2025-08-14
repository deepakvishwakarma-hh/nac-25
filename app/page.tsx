import { Button } from "@/components/ui/button"
import ReactPlayer from "react-player"
import { ChevronLeft, ChevronRight, Calendar, Clock, FileText, Star, ChevronDown } from "lucide-react"

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://picsum.photos/1920/1080?random=ceremony')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-4xl">
            <div className="text-white space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                NAC 2025 is Here!
                <br />
                Be Part of India's Biggest
                <br />
                Astronomy Challenge
              </h1>

              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl">
                Open To Schools And Individual Students Across India And The World.
                <br />
                Exciting Prizes, National Recognition & A Journey Into Space Learning Awaits!
              </p>

              <div className="flex flex-wrap gap-6 pt-8">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold">
                  Register As an Indian Student
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold">
                  Register As a Foreign Student
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is NAC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">WHAT IS NAC?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Over 1 lakh students inspired
                <br />
                since 2018.
              </h2>
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-2">
              <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-50">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Fosters scientific curiosity, hands-on learning, and direct exposure to the space ecosystem.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Opportunity to interact with real scientists and win national-level recognition.
                  </p>
                </div>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                Learn More About NAC
              </Button>
            </div>

            {/* Right video player */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                <ReactPlayer
                  url="https://picsum.photos/800/450?random=students"
                  width="100%"
                  height="100%"
                  controls={false}
                  playing={false}
                  light="https://picsum.photos/800/450?random=students"
                  playIcon={
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-l-[12px] border-l-gray-900 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Pathways Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Participation Pathways - Choose Your Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dolor tristique cum quis purus commodo. Cursus praesent feugiat
              vestibulum ferme velit mauris blandit.
            </p>
          </div>

          {/* Two Pathways */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Path 1: School Registration */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-xl font-bold text-gray-900">Path 1: School Registration</h3>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Know More
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-400 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">Schools register → get custom registration link.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-400 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">Students register via this link.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-400 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">Consolidated school-wise rankings</p>
                </div>
              </div>
            </div>

            {/* Path 2: Individual Registration */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-xl font-bold text-gray-900">Path 2: Individual Registration</h3>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Know More
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-400 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">
                    For students whose schools are not participating.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-400 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">Register directly by grade.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-400 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">National grade-wise ranking for individuals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacetopia Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              {/* Spacetopia Logo */}
              <div className="mb-6">
                <img src="/placeholder.svg?height=60&width=200" alt="Spacetopia Logo" className="h-12" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                NAC 2025 Preparation
                <br />
                Toolkit - Powered by
                <br />
                Spacetopia
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Get ready with Spacetopia - free strengthened learning platform
                <br />
                formerly known as Cosmic Kids Club
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Video lessons, quizzes, games & mock Olympiads.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">Trusted by thousands of NAC participants.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Continuous space learning even beyond the Olympiad.
                  </p>
                </div>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                Know More
              </Button>
            </div>

            {/* Right video player */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                <ReactPlayer
                  url="https://picsum.photos/800/450?random=space-learning"
                  width="100%"
                  height="100%"
                  controls={false}
                  playing={false}
                  light="https://picsum.photos/800/450?random=space-learning"
                  playIcon={
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-l-[12px] border-l-gray-900 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur. Dolor tristique cum quis purus commodo. Cursus praesent feugiat
              vestibulum ferme velit mauris blandit.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
              Know More
            </Button>
          </div>

          {/* Awards Image */}
          <div className="relative">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/1200/750?random=awards-ceremony-group"
                alt="Awards ceremony with students and certificates"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Ceremony Section */}
      <section className="relative">
        <div
          className="relative h-[600px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://picsum.photos/1920/600?random=awards-ceremony')`,
          }}
        >
          {/* Navigation arrows */}
          <button className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content overlay */}
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h3 className="text-6xl font-bold mb-2">2019</h3>
            <p className="text-lg text-gray-200">Lorem ipsum dolor sit amet consectetur,</p>
          </div>

          {/* Year pagination */}
          <div className="absolute bottom-8 right-8 flex gap-4 text-white z-10">
            <button className="text-gray-400 hover:text-white transition-colors">2019</button>
            <button className="text-gray-400 hover:text-white transition-colors">2018</button>
            <button className="text-white font-semibold">2019</button>
            <button className="text-gray-400 hover:text-white transition-colors">2020</button>
          </div>
        </div>
      </section>

      {/* Why Every Child Must Participate Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Registration Buttons */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Why Every Child Must
              <br />
              Participate
            </h2>

            {/* Registration Buttons */}
            <div className="flex gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wide flex items-center gap-2">
                REGISTER AS School
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button className="bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                Register As Student
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Build Scientific Curiosity */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Scientific Curiosity</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Risus habitant aenean etiam orci.
              </p>
            </div>

            {/* Card 2: Strengthen Logic & Reasoning */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strengthen Logic & Reasoning</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Risus habitant aenean etiam orci.
              </p>
            </div>

            {/* Card 3: National-level Achievement */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">National-level Achievement</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Risus habitant aenean etiam orci.
              </p>
            </div>

            {/* Card 4: Interaction with Scientists */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interaction with Scientists</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Risus habitant aenean etiam orci.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAC 2025 Timeline Section */}
      <section className="py-20 bg-gradient-to-r from-sky-400 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">NAC 2025 Timeline</h2>
          </div>

          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
            {/* Registration Opens */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">REGISTRATION OPENS</h3>
              <p className="text-white text-sm">08/03/2025</p>
            </div>

            {/* Registration Closes */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">REGISTRATION CLOSES</h3>
              <p className="text-white text-sm">08/03/2025</p>
            </div>

            {/* Olympiad Exam */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">OLYMPIAD EXAM</h3>
              <p className="text-white text-sm">08/03/2025</p>
            </div>

            {/* Results Announced */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">RESULTS ANNOUNCED</h3>
              <p className="text-white text-sm">08/03/2025</p>
            </div>

            {/* Awards & Mumbai Visit */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">AWARDS & MUMBAI VISIT</h3>
              <p className="text-white text-sm">08/03/2025</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-wide">
              REGISTER AS School
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold uppercase tracking-wide">
              Register As Student
            </Button>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-3xl p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left content */}
              <div className="text-white space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Stay Connected!</h2>

                <p className="text-lg leading-relaxed opacity-90">
                  Scan this QR Code to join the Official WhatsApp Community
                  <br />
                  for real-time updates, Spacetopia events & NAC-exclusive engagement
                  <br />
                  this Season over 2025.
                </p>

                <div className="pt-4">
                  <p className="text-lg font-semibold">Join Our WhatsApp Community.</p>
                  <p className="text-base opacity-90">
                    Don't miss out on exclusive content made just for NAC 2025
                    <br />
                    participants!
                  </p>
                </div>
              </div>

              {/* Right QR Code */}
              <div className="flex justify-center lg:justify-end relative">
                {/* Curved arrow pointing to QR code */}
                <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden lg:block">
                  <svg width="120" height="80" viewBox="0 0 120 80" className="text-white opacity-80">
                    <path
                      d="M10 40 Q60 10 100 40"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                    />
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="QR Code for WhatsApp Community"
                    className="w-48 h-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Reel - NAC Legacy Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Highlight Reel - NAC Legacy Carousel</h2>
          </div>

          {/* Carousel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <img
                  src="https://picsum.photos/400/225?random=gmrt-visit-1"
                  alt="NAC Legacy Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">Lorem ipsum dolor sit amet</p>
                <p className="text-gray-500 text-xs">23 November Gandhinagar Road, Fort, Mumbai, adipisci</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <img
                  src="https://picsum.photos/400/225?random=gmrt-visit-2"
                  alt="NAC Legacy Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">Lorem ipsum dolor sit amet</p>
                <p className="text-gray-500 text-xs">23 November Gandhinagar Road, Fort, Mumbai, adipisci</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <img
                  src="https://picsum.photos/400/225?random=gmrt-visit-3"
                  alt="NAC Legacy Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">Lorem ipsum dolor sit amet</p>
                <p className="text-gray-500 text-xs">23 November Gandhinagar Road, Fort, Mumbai, adipisci</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <img
                  src="https://picsum.photos/400/225?random=gmrt-visit-4"
                  alt="NAC Legacy Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">Lorem ipsum dolor sit amet</p>
                <p className="text-gray-500 text-xs">23 November Gandhinagar Road, Fort, Mumbai, adipisci</p>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
              View More
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
