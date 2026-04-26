/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Rocket, 
  Target, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  RefreshCcw, 
  Scan, 
  Play, 
  Ticket, 
  Trophy, 
  CheckCircle2, 
  XCircle,
  Globe,
  Settings,
  Zap,
  ShoppingBag,
  Coins,
  Menu,
  X
} from "lucide-react";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  const [view, setView] = useState("home"); // "home", "mall", or "lotto"
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

  useEffect(() => {
    if (view === "lotto") {
      const generateNumbers = () => {
        const numbers = new Set<number>();
        while (numbers.size < 7) {
          numbers.add(Math.floor(Math.random() * 36) + 1);
        }
        return Array.from(numbers);
      };
      setLottoNumbers(generateNumbers());
    }
  }, [view]);

  const products = [
    {
      id: 1,
      name: "Luxury Global Supercar Edition",
      category: "Premium",
      price: "159,000,000",
      points: "15,900,000 P",
      nft: "1590 NFT",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Sorgen Premium Organic Rice",
      category: "Sorgen Food",
      price: "72,000",
      points: "7,200 P",
      nft: "0.7 NFT",
      img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
      tag: "New"
    },
    {
      id: 3,
      name: "Advanced Medical Capsule A1",
      category: "Medical",
      price: "120,000",
      points: "12,000 P",
      nft: "1.2 NFT",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
      tag: "Certified"
    },
    {
      id: 4,
      name: "Ultra-Pure Nano Filter System",
      category: "Nano Tech",
      price: "340,000",
      points: "34,000 P",
      nft: "3.4 NFT",
      img: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
      tag: "High Tech"
    },
    {
      id: 5,
      name: "Quantum AI Smart Watch",
      category: "Nano Tech",
      price: "450,000",
      points: "45,000 P",
      nft: "4.5 NFT",
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800",
      tag: "Limited"
    }
  ];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => (setView("home"), setIsMenuOpen(false))}>
            <div className="w-10 h-10 bg-lego-red border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white font-black text-xl">
              A
            </div>
            <span className="font-display font-black text-2xl tracking-tighter uppercase">Angel Lotto</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-bold text-sm tracking-widest uppercase">
            <button onClick={() => setView("home")} className={`hover:text-lego-blue ${view === "home" ? "text-lego-blue underline underline-offset-4" : ""}`}>Platform</button>
            <button onClick={() => setView("lotto")} className={`hover:text-lego-red ${view === "lotto" ? "text-lego-red underline underline-offset-4" : ""}`}>ALotto</button>
            <button onClick={() => setView("mall")} className={`hover:text-lego-yellow ${view === "mall" ? "text-lego-yellow underline underline-offset-4" : ""}`}>Angel Mall</button>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block lego-button py-2 px-6 text-sm">
              Contact
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden w-10 h-10 border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 right-0 bg-white border-b-2 border-black md:hidden px-6 py-8 flex flex-col gap-6 font-black uppercase tracking-widest shadow-xl"
            >
              <button 
                onClick={() => (setView("home"), setIsMenuOpen(false))} 
                className={`text-left text-lg ${view === "home" ? "text-lego-blue" : ""}`}
              >
                Platform
              </button>
              <button 
                onClick={() => (setView("lotto"), setIsMenuOpen(false))} 
                className={`text-left text-lg ${view === "lotto" ? "text-lego-red" : ""}`}
              >
                ALotto
              </button>
              <button 
                onClick={() => (setView("mall"), setIsMenuOpen(false))} 
                className={`text-left text-lg ${view === "mall" ? "text-lego-yellow" : ""}`}
              >
                Angel Mall
              </button>
              <button 
                className="lego-button w-full text-center py-4 bg-lego-yellow text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {view === "home" ? (
        <>
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-slate-900 border-b-4 border-black">
            {/* Advanced Background Layering */}
            <div className="absolute inset-0 -z-10">
              {/* Abstract Base Image */}
              <div 
                className="absolute inset-0 opacity-[0.25] mix-blend-soft-light"
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1920")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              {/* Deep Gradients for Depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/90 to-lego-blue/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,85,191,0.15)_0%,transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(227,0,11,0.1)_0%,transparent_50%)]" />
              
              {/* Subtle Patterns */}
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              
              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10"
              >
                <div className="inline-block px-4 py-1 bg-lego-yellow text-black font-black text-xs mb-6 uppercase tracking-widest border-2 border-black">
                  Business Project 2026
                </div>
                <h1 className="font-display font-black text-5xl md:text-7xl leading-tight mb-6 text-white drop-shadow-2xl">
                  상실된 기회에서<br />
                  <span className="text-lego-yellow italic underline decoration-white decoration-8 underline-offset-8">글로벌 상생</span>으로
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-lg leading-relaxed font-bold">
                  3억 명의 일상을 바꾸는 위대한 습관,<br />
                  엔젤로또 초고속 스케일업 사업계획
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => setView("mall")} className="lego-button flex items-center gap-3 bg-white text-black hover:bg-lego-yellow">
                    Explore Mall <ShoppingBag className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-4 px-6 py-4 font-black border-2 border-white/20 bg-white/5 backdrop-blur-md text-white">
                    <Users className="w-6 h-6 text-lego-yellow" />
                    <span>Target: 300M Users</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 w-full aspect-square bg-lego-yellow border-4 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-8 overflow-hidden">
                   <div className="grid grid-cols-4 gap-4 w-full h-full opacity-20">
                      {Array.from({length: 16}).map((_, i) => (
                        <div key={i} className="border-4 border-black rounded-full" />
                      ))}
                   </div>
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                      <Ticket className="w-32 h-32 mb-4 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.2)] text-black" />
                      <span className="font-black text-6xl italic text-black">LOTTO</span>
                      <p className="mt-4 font-black text-xl text-black">Turn Your Discarded Dreams Into Reality</p>
                   </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-lego-red border-4 border-black -z-10 rotate-12" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lego-blue border-4 border-black -z-10 -rotate-12" />
              </motion.div>
            </div>
          </section>

          {/* Market Problem Section */}
          <section id="about" className="py-24 bg-white border-y-4 border-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="font-display font-black text-4xl md:text-5xl mb-6 text-slate-900">
                  단절된 생태계를 연결할 강력한 트리거
                </h2>
                <div className="w-24 h-3 bg-lego-red mx-auto mb-8" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div {...fadeInUp} className="lego-card bg-white p-8">
                  <div className="w-12 h-12 bg-lego-red flex items-center justify-center text-white mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-xl mb-4 text-slate-900">치솟는 고객 유득 비용</h3>
                  <p className="text-slate-600 font-bold">전통적인 광고의 높은 CAC와 회원 유치의 한계를 혁신적인 낙첨 번호 활용으로 극복합니다.</p>
                </motion.div>

                <motion.div {...fadeInUp} className="lego-card bg-white p-8">
                  <div className="w-12 h-12 bg-lego-blue flex items-center justify-center text-white mb-6">
                    <Settings className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-xl mb-4 text-slate-900">중소기업 제조사의 한계</h3>
                  <p className="text-slate-600 font-bold">판로 개척과 마케팅 자금 부족으로 어려움을 겪는 중소기업에 100% 필수 시청 마케팅을 제공합니다.</p>
                </motion.div>

                <motion.div {...fadeInUp} className="lego-card bg-lego-yellow/10 p-8">
                  <div className="w-12 h-12 bg-lego-yellow flex items-center justify-center text-black mb-6 border-2 border-black">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-xl mb-4 text-slate-900">중국 복권 시장 기회</h3>
                  <p className="text-slate-600 font-bold">연간 거래액 900억 달러(132조원), 3억 명의 참여자가 있는 거대 시장을 정조준합니다.</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 4-Step Process Section */}
          <section id="process" className="py-24 lego-dot">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="font-display font-black text-4xl md:text-5xl mb-16 text-slate-900">
                버려진 기회를 희망으로 바꾸는 <span className="text-lego-red">4단계 프로세스</span>
              </h2>

              <div className="grid md:grid-cols-4 gap-4 relative">
                <div className="hidden md:block absolute top-[60px] left-0 right-0 h-1 bg-black -z-10" />

                {[
                  { icon: Scan, title: "바코드 스캔", desc: "버려진 로또 바코드 앱 내 스캔", color: "bg-white text-slate-900" },
                  { icon: Play, title: "광고 필수 시청", desc: "중소기업 홍보 영상 100% 스킵 불가 시청", color: "bg-lego-blue text-white" },
                  { icon: Ticket, title: "응모권 발급", desc: "무료 1등 경품 응모권 자동 발급", color: "bg-lego-yellow text-slate-900" },
                  { icon: Trophy, title: "초고가 경품 당첨", desc: "슈퍼카, 명품, 명품 식재료 등 1등 당첨기회", color: "bg-lego-red text-white" },
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    {...fadeInUp}
                    transition={{ delay: idx * 0.1 }}
                    className={`lego-card p-6 flex flex-col items-center ${step.color}`}
                  >
                    <div className="w-16 h-16 border-4 border-black flex items-center justify-center mb-6 bg-white shrink-0">
                      <step.icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-sm font-black mb-2 opacity-60">STEP 0{idx + 1}</div>
                    <h4 className="font-black text-lg mb-3">{step.title}</h4>
                    <p className="text-sm font-bold leading-tight">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Advantage Table Section */}
          <section id="advantage" className="py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
                  리스크 제로(Risk-Zero) 마케팅 채널
                </h2>
                <p className="text-lego-yellow font-bold uppercase tracking-widest text-sm">Angel Lotto vs Existing Marketing</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border-4 border-white text-left font-bold">
                  <thead>
                    <tr className="bg-white text-black text-xl">
                      <th className="p-6 border-4 border-black">비교 항목</th>
                      <th className="p-6 border-4 border-black opacity-50">기존 퍼포먼스 마케팅</th>
                      <th className="p-6 border-4 border-black bg-lego-yellow">엔젤로또</th>
                    </tr>
                  </thead>
                  <tbody className="text-lg">
                    {[
                      { label: "시청 완료율", old: "1~2% (3초 후 스킵)", new: "100% 필수 시청 보장", color: "text-lego-green" },
                      { label: "고객 획득 비용(CAC)", old: "클릭당 단가 지속 상승", new: "낙첨 복권 활용으로 극단적 비용 절감", color: "text-lego-yellow" },
                      { label: "제품 체험 및 전환", old: "단순 노출 후 이탈", new: "무료 체험 제공으로 자발적 구매 전환", color: "text-lego-blue" },
                      { label: "고객 잔존율", old: "광고 피로도로 인한 앱 삭제", new: "당첨 자격 유지를 위한 매일 접속", color: "text-lego-red" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="p-6 border-4 border-white/20">{row.label}</td>
                        <td className="p-6 border-4 border-white/20 opacity-50 italic">{row.old}</td>
                        <td className={`p-6 border-4 border-white/20 font-black ${row.color}`}>{row.new}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Ecosystem Section */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div {...fadeInUp}>
                  <h2 className="font-display font-black text-4xl md:text-5xl mb-8 leading-tight text-slate-900">
                    자생적으로 팽창하는<br />
                    <span className="text-lego-blue">무한 동력 엔진</span>
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-6 p-6 lego-card bg-lego-yellow/5 text-slate-900">
                      <Users className="w-12 h-12 text-lego-yellow shrink-0" />
                      <div>
                        <h4 className="font-black text-xl mb-1">사용자 가치</h4>
                        <p className="text-slate-600 font-bold italic">"일확천금의 기회 & 무료 제품 체험"</p>
                        <p className="text-xs mt-2 uppercase tracking-tighter font-black">매일 접속하는 강력한 리텐션 확보</p>
                      </div>
                    </div>
                    <div className="flex gap-6 p-6 lego-card bg-lego-blue/5 text-slate-900">
                      <ShoppingBag className="w-12 h-12 text-lego-blue shrink-0" />
                      <div>
                        <h4 className="font-black text-xl mb-1">중소기업 가치</h4>
                        <p className="text-slate-600 font-bold italic">"선부담 없는 100% 타겟 홍보"</p>
                        <p className="text-xs mt-2 uppercase tracking-tighter font-black">제품 협찬을 통한 실매출 성공 전환</p>
                      </div>
                    </div>
                    <div className="flex gap-6 p-6 lego-card bg-lego-red/5 text-slate-900">
                      <Settings className="w-12 h-12 text-lego-red shrink-0" />
                      <div>
                        <h4 className="font-black text-xl mb-1">플랫폼 가치</h4>
                        <p className="text-slate-600 font-bold italic">"ESG 실현 & 폭발적 트래픽 확보"</p>
                        <p className="text-xs mt-2 uppercase tracking-tighter font-black">지속적인 광고비 및 수수료 수익 창출</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="relative aspect-square flex items-center justify-center">
                  <div className="w-full h-full relative">
                     <motion.div 
                       animate={{ rotate: 360 }}
                       transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                       className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-8 border-black border-dashed rounded-full flex items-center justify-center bg-lego-yellow shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
                     >
                        <Zap className="w-20 h-20 text-black" />
                     </motion.div>
                     <motion.div 
                       animate={{ rotate: -360 }}
                       transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                       className="absolute bottom-10 right-10 w-1/3 h-1/3 border-8 border-black border-dashed rounded-full bg-lego-blue shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                     />
                     <motion.div 
                       animate={{ rotate: 360 }}
                       transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                       className="absolute top-10 right-10 w-1/4 h-1/4 border-8 border-black border-dashed rounded-full bg-lego-red shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                     />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Revenue Structure Section */}
          <section className="py-24 lego-dot">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lego-card p-12 bg-white flex flex-col gap-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
                   <div className="flex items-center gap-4">
                     <div className="w-16 h-16 bg-lego-yellow border-4 border-black flex items-center justify-center">
                        <Coins className="w-10 h-10 text-black" />
                     </div>
                     <h3 className="text-3xl font-black text-slate-900">수익 공유 시스템</h3>
                   </div>
                   <p className="text-xl font-black text-slate-700 leading-relaxed italic">
                     "카테고리별 독립 당첨: 화장품, 쌀, 가전 등 각 제품군별 매출에 비례하여 매달 수백 명의 1등 당첨자 지속 배출"
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="p-6 bg-slate-50 border-2 border-black flex flex-col items-center">
                        <div className="text-xs font-black opacity-40 mb-2 uppercase tracking-widest text-slate-900">이익 환원</div>
                        <div className="text-3xl font-black text-lego-red italic leading-none">40-60%</div>
                     </div>
                     <div className="p-6 bg-slate-50 border-2 border-black flex flex-col items-center">
                        <div className="text-xs font-black opacity-40 mb-2 uppercase tracking-widest text-slate-900">기업 가치</div>
                        <div className="text-3xl font-black text-lego-blue italic leading-none">300조</div>
                     </div>
                   </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="font-display font-black text-4xl md:text-6xl leading-tight text-slate-900">
                    전 세계 유일,<br />
                    <span className="text-lego-blue underline decoration-lego-yellow decoration-8 decoration-skip-ink">소비가 일확천금</span>으로<br />
                    돌아오는 구조
                  </h2>
                  <div className="space-y-4 mt-4">
                    {[
                      "강력한 락인 효과: 어차피 필요한 생필품 구매",
                      "투명성 보장: 한중 법인 간 명확한 이동 기록",
                      "NFT 금융 자산화: 쇼핑 포인트를 사용자 고유 자산으로 전환"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-4 font-black text-lg text-slate-700">
                        <div className="flex-shrink-0 w-8 h-8 bg-lego-green flex items-center justify-center text-white border-2 border-black">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : view === "lotto" ? (
        /* ALotto Section */
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="min-h-screen py-20 bg-slate-950 text-white lego-dot"
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Header with Animation */}
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-2 bg-lego-red text-white font-black mb-4 border-2 border-black">
                제1221회 당첨 번호 (2026.04.25)
              </div>
              <h2 className="font-display font-black text-6xl md:text-8xl mb-8 uppercase italic text-lego-yellow">
                ALotto <span className="text-white">Winner</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[6, 13, 18, 28, 30, 36].map((num, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2 + i * 0.2,
                      ease: "easeInOut"
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-black flex items-center justify-center text-3xl font-black bg-lego-blue text-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
                  >
                    {num}
                  </motion.div>
                ))}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black border-4 border-lego-red flex items-center justify-center text-3xl font-black text-lego-red shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  +
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-lego-red border-4 border-black flex items-center justify-center text-3xl font-black text-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
                >
                  9
                </motion.div>
              </div>
              <p className="mt-12 text-2xl font-black text-white bg-white/10 inline-block px-10 py-4 border-2 border-dashed border-white/20">
                1등 당첨 번호: 6, 13, 18, 28, 30, 36 + 보너스 9
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Winning Stats */}
              <div className="lg:col-span-2 space-y-8">
                <div className="lego-card bg-white text-black p-8 shadow-[10px_10px_0px_0px_rgba(227,0,11,1)] border-4 border-black">
                  <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-4">
                    <h3 className="text-3xl font-black uppercase italic">당첨 번호 신청</h3>
                    <div className="px-4 py-1 bg-lego-red text-white font-black text-sm uppercase">Open Now</div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="font-black text-slate-600">낙첨된 번호를 황금의 기회로 바꾸는 티켓 신청</p>
                      <input type="text" placeholder="로또 바코드 번호 입력" className="w-full p-4 border-2 border-black font-black text-lg focus:outline-none focus:ring-4 focus:ring-lego-yellow" />
                      <button className="w-full lego-button h-16 bg-lego-blue text-white hover:bg-black transition-colors">응모권 신청하기</button>
                    </div>
                    <div className="bg-slate-100 p-6 border-2 border-black space-y-4">
                      <h4 className="font-black text-lego-blue">실시간 응모 현황</h4>
                      <div className="space-y-2">
                        {[
                          { id: "010-****-1234", time: "1분 전", status: "신청완료" },
                          { id: "010-****-5678", time: "3분 전", status: "분석완료" },
                          { id: "010-****-9012", time: "10분 전", status: "대기중" },
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between items-center text-sm font-black border-b border-black/10 pb-2">
                            <span>{item.id}</span>
                            <span className="text-lego-red">{item.status}</span>
                            <span className="opacity-40">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prize Info Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="lego-card bg-lego-yellow p-6 border-4 border-black text-black">
                    <h4 className="font-black text-2xl mb-4 italic">1등 보상 리스트</h4>
                    <ul className="space-y-4">
                      {[
                        { prize: "슈퍼카 페라리 F8", val: "1명" },
                        { prize: "샤넬 플랩백 10세트", val: "5명" },
                        { prize: "다이아몬드 워치", val: "10명" },
                      ].map((p, i) => (
                        <li key={i} className="flex justify-between items-center border-b-2 border-black flex-wrap gap-2 pb-2">
                          <span className="font-black uppercase">{p.prize}</span>
                          <span className="bg-black text-white px-3 py-1 font-black text-sm">{p.val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lego-card bg-lego-blue p-6 border-4 border-black text-white">
                    <h4 className="font-black text-2xl mb-4 italic">2등 보상 리스트</h4>
                    <ul className="space-y-4">
                      {[
                        { prize: "최신형 노트북", val: "100명" },
                        { prize: "프리미엄 세례 세트", val: "300명" },
                        { prize: "쇼핑몰 포인트 100만", val: "500명" },
                      ].map((p, i) => (
                        <li key={i} className="flex justify-between items-center border-b-2 border-white/20 flex-wrap gap-2 pb-2">
                          <span className="font-black uppercase">{p.prize}</span>
                          <span className="bg-white text-black px-3 py-1 font-black text-sm">{p.val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: Live Feed */}
              <div className="lego-card bg-white text-black p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,150,57,1)] h-full overflow-hidden">
                <h3 className="text-3xl font-black uppercase italic mb-8 border-b-4 border-black pb-4 text-lego-green">Live Winners</h3>
                <div className="space-y-6">
                  {Array.from({length: 8}).map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-slate-50 border-2 border-black"
                    >
                      <div className="w-12 h-12 bg-lego-red flex items-center justify-center text-white shrink-0 font-black">W</div>
                      <div>
                        <div className="text-xs font-black opacity-50 uppercase tracking-widest mb-1">Lottery Drawing #{8902 - i}</div>
                        <div className="font-black text-sm leading-tight mb-2">당첨자 {Math.random() > 0.5 ? "왕민" : "이수"}님 1등 당첨!</div>
                        <div className="inline-block px-2 py-1 bg-lego-yellow text-[10px] font-black uppercase border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Ferrari F8 Winner</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ) : (
        /* Angel Mall Separate View */
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="min-h-screen py-20 bg-slate-50 lego-dot"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <button onClick={() => setView("home")} className="mb-8 flex items-center gap-2 font-black text-sm uppercase tracking-widest hover:text-lego-red transition-colors text-slate-900">
                  <RefreshCcw className="w-4 h-4" /> Back to Platform
                </button>
                <h2 className="font-display font-black text-6xl md:text-8xl mb-6 text-slate-900">
                  Angel <span className="text-lego-blue">Mall</span>
                </h2>
                <p className="text-2xl font-black text-slate-600 leading-relaxed">
                  낙첨 복권이 가치 있는 자산으로 변하는 곳. <br /> 
                  <span className="text-black underline decoration-lego-yellow decoration-4 underline-offset-4">포인트, NFT, 일반 결제</span>로 최고의 기술력을 경험하세요.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["All", "Nano Tech", "Sorgen Food", "Medical"].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-3 border-2 border-black font-black text-sm uppercase transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${activeCategory === cat ? 'bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]' : 'bg-white text-black hover:bg-slate-100'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="lego-card bg-white group overflow-hidden h-full flex flex-col"
                >
                  <div className="relative aspect-video sm:aspect-square bg-slate-200 overflow-hidden border-b-2 border-black">
                    <div className="absolute top-4 left-4 z-10 px-4 py-1 bg-lego-red text-white font-black text-xs uppercase tracking-widest border-2 border-black italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {product.tag}
                    </div>
                    <img 
                      src={product.img} 
                      alt={product.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="text-xs font-black uppercase tracking-widest text-lego-blue mb-3">{product.category}</div>
                    <h4 className="font-black text-xl sm:text-2xl mb-6 leading-tight text-slate-900 line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem]">{product.name}</h4>
                    
                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex flex-col gap-1 items-start text-sm">
                        <span className="flex items-center gap-2 font-black text-slate-400 uppercase tracking-tighter whitespace-nowrap">/ Cash Payment</span>
                        <span className="font-black text-lg text-slate-900 whitespace-nowrap px-1">₩{product.price}</span>
                      </div>
                      <div className="flex flex-col gap-1 items-start text-sm p-3 sm:p-4 bg-lego-yellow/10 border-2 border-black">
                        <span className="flex items-center gap-2 font-black uppercase tracking-tighter text-slate-900 whitespace-nowrap"><Ticket className="w-4 h-4 text-black shrink-0"/> / Wallet Points</span>
                        <span className="font-black text-lg text-lego-red whitespace-nowrap px-1">{product.points}</span>
                      </div>
                      <div className="flex flex-col gap-1 items-start text-sm p-3 sm:p-4 bg-lego-blue/10 border-2 border-black">
                        <span className="flex items-center gap-2 font-black text-lego-blue uppercase tracking-tighter whitespace-nowrap"><Zap className="w-4 h-4 shrink-0"/> / NFT Balance</span>
                        <span className="font-black text-lg text-lego-blue whitespace-nowrap px-1">{product.nft}</span>
                      </div>
                    </div>

                    <button className="w-full lego-button h-16 bg-white hover:bg-black hover:text-white text-xl text-black">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* CTA Footer Section */}
      <section className="py-32 bg-lego-red text-white text-center border-t-8 border-black">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl mb-8 leading-tight">
            모든 준비는 끝났습니다.<br />
            플러그만 꽂으십시오.
          </h2>
          <p className="text-2xl md:text-3xl font-black mb-12 opacity-90 italic">
            "역사를 바꿀 엔젤로또의 거대한 골든 블루프린트가 지금 펼쳐집니다."
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button onClick={() => setView("mall")} className="lego-button bg-lego-yellow text-black px-12 py-6 text-2xl uppercase italic">
              Explore Angel Mall
            </button>
            <div className="font-black tracking-tighter text-3xl">
              Angel Lotto Platform 2026
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom Legal */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView("home")}>
             <div className="w-8 h-8 bg-lego-red flex items-center justify-center font-black">A</div>
             <span className="font-black uppercase tracking-widest text-lg">Angel Lotto</span>
          </div>
          <div className="text-sm opacity-50 font-black text-white">
            © 2026 Angel Lotto Platform. All Rights Reserved. 본 수치는 보수적 추정치입니다.
          </div>
          <div className="flex gap-4">
             <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white"><Globe className="w-5 h-5" /></div>
             <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white"><Users className="w-5 h-5" /></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
