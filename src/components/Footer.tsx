import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold text-blue-400">Gaurav Jena</p>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/PY-SENSEI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/gaurav-jena-739838232/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:gauravjena48@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Gaurav Jena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}