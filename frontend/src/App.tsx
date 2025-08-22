import { Layout } from "./components/layouts/Layout";
import Home from "./pages/HomePage";
import LessonPlayer from "./components/modules/LessonPlayer";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/LoginPage";
import { Signup } from "./pages/SignupPage";
import { ChangePassword } from "./pages/ResetPasswordPage";
import QuizPage from "./components/QuizPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import StudentDashboard from "./pages/StudentDashboard"; // ✅ import dashboard

function App() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset-password" element={<ChangePassword />} />

      {/* Protected route example */}
      <Route
        path="/quiz/:lessonId"
        element={
          <ProtectedRoute role="student">
            <Layout>
              <QuizPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Lesson route */}
      <Route
        path="/lesson"
        element={
          <Layout>
            <LessonPlayer
              lesson={{
                id: "1",
                title: "Introduction to React",
                videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                notes: "This is a sample lesson with **markdown** notes.",
                duration: 100,
              }}
              progress={{
                lessonId: "1",
                completed: false,
                progress: 0,
                lastWatched: 0,
              }}
              onProgressUpdate={(progress) =>
                console.log("Progress updated:", progress)
              }
              onNextLesson={() => console.log("Go to next lesson")}
              onPrevLesson={() => console.log("Go to previous lesson")}
            />
          </Layout>
        }
      />

      {/* Student Dashboard (Protected) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="student">
            <Layout>
              <StudentDashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Public homepage */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
