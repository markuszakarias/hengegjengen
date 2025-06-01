"use client";

import { useState } from "react";
import {
  Plus,
  Trash2,
  Shirt,
  Snowflake,
  Camera,
  Pill,
  Zap,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

// Note: This page uses client-side state for interactivity
// Metadata is handled in layout.tsx for client components

export default function PackingList() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  const packingCategories = [
    {
      title: "Clothing",
      icon: Shirt,
      color: "bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
      items: [
        "Warm jacket/coat",
        "Comfortable walking shoes",
        "Waterproof boots",
        "Jeans/pants (3-4 pairs)",
        "Cozy sweaters",
        "Underwear (7 sets)",
        "Socks (thick & regular)",
        "Pajamas/sleepwear",
        "Rain jacket",
        "Cute outfits for photos",
        "Swimsuit",
        "Warm hat & gloves",
      ],
    },
    {
      title: "Cold Weather Essentials",
      icon: Snowflake,
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
      items: [
        "Thermal underwear",
        "Warm scarf",
        "Wool socks",
        "Hand/foot warmers",
        "Lip balm (cold weather)",
        "Moisturizer",
        "Sunglasses",
        "Sunscreen (snow reflects!)",
      ],
    },
    {
      title: "Electronics & Tech",
      icon: Zap,
      color:
        "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
      items: [
        "Phone charger",
        "Camera + extra batteries",
        "Power bank",
        "International adapter",
        "Headphones",
        "Laptop/tablet (optional)",
        "GoPro for adventures",
        "Ring light for photos",
      ],
    },
    {
      title: "Health & Beauty",
      icon: Pill,
      color:
        "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
      items: [
        "Medications (personal)",
        "First aid kit",
        "Toiletries (travel size)",
        "Makeup & skincare",
        "Hair styling tools",
        "Deodorant",
        "Toothbrush & toothpaste",
        "Shampoo & conditioner",
        "Face masks for spa night",
        "Nail care kit",
      ],
    },
    {
      title: "Travel Documents",
      icon: Camera,
      color:
        "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
      items: [
        "Passport/ID",
        "Travel insurance docs",
        "Flight confirmations",
        "Accommodation bookings",
        "Emergency contacts",
        "Credit cards & cash",
        "European Health Card",
        "Copies of important docs",
      ],
    },
    {
      title: "Fun & Activities",
      icon: Palette,
      color:
        "bg-fuchsia-100 dark:bg-fuchsia-900/20 text-fuchsia-600 dark:text-fuchsia-400",
      items: [
        "Books/e-reader",
        "Card games",
        "Bluetooth speaker",
        "Journal & pens",
        "Snacks for travel",
        "Reusable water bottle",
        "Picnic blanket",
        "Portable phone tripod",
        "Friendship bracelets to make",
        "Swedish phrase book",
      ],
    },
  ];

  const getProgress = (categoryItems: string[]) => {
    const checkedInCategory = categoryItems.filter((item) =>
      checkedItems.has(`${categoryItems[0]}-${item}`)
    ).length;
    return Math.round((checkedInCategory / categoryItems.length) * 100);
  };

  const getTotalProgress = () => {
    const totalItems = packingCategories.reduce(
      (sum, cat) => sum + cat.items.length,
      0
    );
    const totalChecked = Array.from(checkedItems).length;
    return Math.round((totalChecked / totalItems) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="heading-fancy text-4xl md:text-5xl text-primary mb-4">
            Packing List
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Everything you need for your Swedish adventure. Check off items as
            you pack!
          </p>

          {/* Progress Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">Overall Progress</span>
                <Badge variant="secondary">
                  {getTotalProgress()}% complete
                </Badge>
              </div>
              <Progress value={getTotalProgress()} className="h-3" />
            </CardContent>
          </Card>
        </div>

        {/* Packing Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {packingCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const progress = getProgress(category.items);

            return (
              <Card key={categoryIndex}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">
                        {category.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Progress value={progress} className="flex-1 h-2" />
                        <Badge variant="outline" className="text-xs">
                          {progress}%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const itemId = `${category.title}-${item}`;
                    const isChecked = checkedItems.has(itemId);

                    return (
                      <div
                        key={itemIndex}
                        className="flex items-center space-x-3 group"
                      >
                        <Checkbox
                          id={itemId}
                          checked={isChecked}
                          onCheckedChange={() => toggleItem(itemId)}
                        />
                        <label
                          htmlFor={itemId}
                          className={`flex-1 cursor-pointer transition-all ${
                            isChecked
                              ? "line-through text-muted-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {item}
                        </label>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 h-8 w-8 p-0 hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    );
                  })}

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start mt-4"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add item
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Export List</Button>
          <Button variant="outline" size="lg">
            Share with Group
          </Button>
          <Button variant="outline" size="lg">
            Print List
          </Button>
        </div>

        {/* Packing Tips */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎒 Packing Tips for Sweden
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>• Pack layers - Swedish weather can be unpredictable</li>
                <li>• Bring a good rain jacket, even in summer</li>
                <li>• Waterproof shoes are essential</li>
                <li>• Don&apos;t forget warm clothes for evenings</li>
              </ul>
              <ul className="space-y-2">
                <li>• Pack light - you&apos;ll want room for souvenirs</li>
                <li>• Swedish plugs use Type C & F outlets</li>
                <li>• Bring cash - some places don&apos;t accept cards</li>
                <li>• Swedish summers have very long days</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
