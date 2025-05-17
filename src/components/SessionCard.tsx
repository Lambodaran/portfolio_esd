
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Image } from 'lucide-react';

interface SessionCardProps {
  id: string;
  date: string;
  title: string;
  instructor: string;
  summary: string;
  images?: string[]; // Add this field to the props
}

const SessionCard = ({ id, date, title, instructor, summary, images }: SessionCardProps) => {
  const hasImage = images && images.length > 0;
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <CardHeader className="bg-edu-secondary/10 pb-2">
        <CardTitle className="text-edu-primary">{title}</CardTitle>
        <CardDescription className="text-sm font-medium text-gray-700">{date} | {instructor}</CardDescription>
      </CardHeader>
      
      {hasImage && (
        <div className="h-40 w-full relative overflow-hidden">
          <img 
            src={images[0]} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardContent className={`pt-4 ${hasImage ? '' : 'flex-grow'}`}>
        <p className="text-gray-600 line-clamp-3">{summary}</p>
      </CardContent>
      
      <CardFooter className="flex justify-end bg-gray-50 mt-auto">
        <Button asChild variant="ghost" className="text-edu-secondary hover:text-edu-primary hover:bg-edu-secondary/10">
          <Link to={`/sessions/${id}`}>
            {hasImage ? "View Details" : (
              <>
                View Details <ChevronRight className="ml-2 h-4 w-4" />
              </>
            )}
            {hasImage && <Image className="ml-2 h-4 w-4" />}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SessionCard;
