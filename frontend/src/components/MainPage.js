import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import Sponsors from './Sponsors';
import Footer from './Footer';

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/bc1f/db52/3f6efe5c5c7247052527af4b080e330f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UMF4GBIMiPD57L53gPTpyMN-81lzkbJoR~-jSHc7Qbjk1v-ETbD5~NQxL35tc7S7zVVLykvKLyUfRBPS8GQakEh2GQSytPREBw6uugbB4Z7qK38wR7tE79ZrNaSbQ349ySTqUSM86aDu3NIZYAZFje-g8L5WiIJjy9uassZcairL4uscjD8bWfzlbETNeeHpEweApV~028UsjErlyhwFhHT6MVeLzgi2Hfgoae1i34nOn2GacBMUyntMA6BVySk-YsPtdmo1RBGRK0zrKv-T-QGnrXxxT49yxuiNQkYmdY-6L6~86IC5wqMir3kHkRjRALUPbpORdnMAIB40vrk86Q__)' }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-8 rounded-lg shadow-md">
            <LoginForm />
          </div>
        </div>
      </main>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default MainPage;
