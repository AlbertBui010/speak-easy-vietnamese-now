
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, X, ChevronRight, Star, Users, Clock, Award } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would integrate with your form handling service
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('register');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Button 
          onClick={scrollToForm}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg"
        >
          Đăng ký ngay
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Nói tiếng Anh tự tin với{" "}
                <span className="text-blue-600">phát âm chuẩn</span> – Từ hôm nay!
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Khóa học online 4 tuần – Có chỉnh lỗi trực tiếp – Lịch học linh hoạt – 
                Kèm phản hồi cá nhân
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Đăng ký ngay <ChevronRight className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Giáo viên dạy online" 
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">4.9/5 từ 200+ học viên</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE Section - Problems */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bạn đang gặp phải những khó khăn này?
            </h2>
            <p className="text-xl text-gray-600">
              Đây là những vấn đề phổ biến mà học viên thường gặp
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Bạn phát âm sai khiến người bản ngữ không hiểu?",
              "Bạn thiếu tự tin khi nói tiếng Anh?",
              "Bạn học nhiều năm nhưng không biết mình phát âm đúng hay chưa?",
              "Bạn từng thử luyện nói qua video, nhưng không ai chỉnh lỗi cho bạn?"
            ].map((problem, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-center font-medium">
              👉 Những khó khăn này ảnh hưởng đến giao tiếp, học tập, và cơ hội toàn cầu.
            </p>
          </div>
        </div>
      </section>

      {/* AFTER Section - Results */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kết quả bạn sẽ đạt được sau khóa học
            </h2>
            <p className="text-xl text-gray-600">
              Hàng trăm học viên đã thay đổi hoàn toàn cách phát âm của mình
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Phát âm rõ ràng, chuẩn giọng quốc tế",
              "Tự tin nói chuyện với người nước ngoài",
              "Hiểu và áp dụng quy tắc phát âm một cách tự nhiên",
              "Nhận phản hồi cá nhân, sửa lỗi trực tiếp",
              "Sẵn sàng cho phỏng vấn, thuyết trình, giao tiếp thực tế"
            ].map((result, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">{result}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-center font-medium text-lg">
              🎉 Học viên đã cải thiện rõ rệt chỉ sau 4 tuần!
            </p>
          </div>
        </div>
      </section>

      {/* BRIDGE Section - Course Details */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Khóa học "Chuẩn Phát Âm – Tự Tin Giao Tiếp"
            </h2>
            <p className="text-xl text-gray-600">
              Phương pháp học hiệu quả, được thiết kế riêng cho người Việt
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Users className="mx-auto text-blue-600 mb-2" size={48} />
                <CardTitle>Giáo viên chuyên nghiệp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Nhiều năm dạy online cho người Việt</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="mx-auto text-blue-600 mb-2" size={48} />
                <CardTitle>Thời lượng linh hoạt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">4 tuần học online - lịch học tự do</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Award className="mx-auto text-blue-600 mb-2" size={48} />
                <CardTitle>Phản hồi cá nhân</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Sửa lỗi 1-1 và theo dõi tiến độ</p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-6">🛠️ Nội dung khóa học bao gồm:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Kiểm tra phát âm đầu vào",
                  "Dạy phát âm chuẩn từng âm (IPA)",
                  "Luyện nói có ngữ điệu, ngắt nghỉ",
                  "Sửa lỗi 1-1 theo buổi",
                  "Bài tập hàng ngày",
                  "Nhóm hỗ trợ & phản hồi mỗi tuần"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="text-blue-600 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Giáo viên" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">💼 Về giáo viên</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Tôi là <strong>Ms. Linh</strong>, giáo viên phát âm với hơn <strong>5 năm</strong> kinh nghiệm 
                giảng dạy online. Tôi hiểu rõ lỗi phát âm phổ biến của người Việt và có phương pháp 
                luyện tập dễ nhớ, dễ áp dụng."
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="text-blue-600" size={20} />
                  <span>Chứng chỉ TESOL quốc tế</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-blue-600" size={20} />
                  <span>Đã giảng dạy cho 500+ học viên</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-blue-600" size={20} />
                  <span>Đánh giá 4.9/5 sao</span>
                </div>
              </div>
              <blockquote className="text-lg italic text-blue-800 border-l-4 border-blue-600 pl-4">
                "Tôi tạo ra khóa học này để giúp bạn nói tiếng Anh rõ ràng, chuẩn xác và tự tin mỗi ngày."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💬 Phản hồi từ học viên
            </h2>
            <p className="text-xl text-gray-600">
              Những chia sẻ chân thật từ học viên đã hoàn thành khóa học
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Huyền",
                course: "Học viên khóa 2",
                feedback: "Mình từng rất ngại nói, nhưng sau khóa học, bạn bè nói giọng mình 'tây hơn hẳn'!",
                rating: 5
              },
              {
                name: "Minh",
                course: "Học viên khóa 3",
                feedback: "Thầy sửa lỗi rất tỉ mỉ, giờ mình tự tin phỏng vấn bằng tiếng Anh rồi!",
                rating: 5
              },
              {
                name: "Lan",
                course: "Học viên khóa 1",
                feedback: "Phương pháp dạy dễ hiểu, bài tập thực tế. Sau 4 tuần thấy tiến bộ rõ rệt.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-20 px-4 bg-blue-50">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900">📥 Đăng ký tham gia khóa học</CardTitle>
              <CardDescription className="text-lg">
                Chỉ còn <span className="text-red-600 font-bold">5 suất ưu đãi</span> trong tháng này!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">Họ và tên *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-base font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-base font-medium">Số điện thoại</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="0901234567"
                  />
                </div>
                
                <div>
                  <Label htmlFor="goal" className="text-base font-medium">Mục tiêu học tập</Label>
                  <Textarea
                    id="goal"
                    name="goal"
                    rows={3}
                    value={formData.goal}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Chia sẻ mục tiêu học tiếng Anh của bạn..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                >
                  Gửi đăng ký ngay
                </Button>
              </form>
              
              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Khai giảng:</strong> 15/01/2025
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Liên hệ:</strong> contact@englishpronunciation.vn
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Bắt đầu hành trình phát âm chuẩn ngay hôm nay!
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Đừng để phát âm sai cản trở cơ hội của bạn
          </p>
          <Button 
            onClick={scrollToForm}
            variant="secondary" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Đăng ký ngay - Chỉ còn 5 suất
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
